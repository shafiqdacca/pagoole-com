//const baseUrl = "https://pagoole.com/"; // change this to your domain
 const baseUrl = "./"; // for local testing

// JS files
const scripts = [
    "js/scripts.js",
    "js/pagoole.js",
    "js/loading.js",
    "js/navbar.js",
    "js/footer.js",
    "js/search-suggestions.js" // ✅ fixed spelling
];

// CSS files
const cssFiles = [
    baseUrl + "css/global-css.css",
    baseUrl + "css/header-footer-report-project.css",
    baseUrl + "css/custom.css",
    baseUrl + "css/loading.css",
    baseUrl + "css/footer.css",
    baseUrl + "css/pagoole.css",
    baseUrl + "css/styles.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
];

// Load CSS dynamically
function loadCSS(files) {
    files.forEach(file => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = file;
        document.head.appendChild(link);
    });
}

// Load JS files one by one, in order
function loadScriptsSequentially(files, callback) {
    let index = 0;

    function loadNext() {
        if (index >= files.length) {
            if (typeof callback === "function") callback();
            return;
        }

        const script = document.createElement("script");
        script.defer = true;
        script.src = files[index].startsWith("http")
            ? files[index]
            : baseUrl + files[index];

        script.onload = () => {
            index++;
            loadNext();
        };

        script.onerror = () => {
            console.error("Failed to load:", files[index]);
            index++;
            loadNext();
        };

        document.head.appendChild(script);
    }

    loadNext();
}

// Load everything
loadCSS(cssFiles);

loadScriptsSequentially(scripts, () => {
    if (typeof initSearchHistory === "function") {
        try {
            initSearchHistory();
        } catch (err) {
            console.error("initSearchHistory failed:", err);
        }
    } else {
        console.warn("initSearchHistory is still not defined.");
    }
});