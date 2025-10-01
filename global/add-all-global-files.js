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
    "css/global-css.css",
    "css/header-footer-report-project.css",
    "css/custom.css",
    "css/loading.css",
    "css/footer.css",
    "css/pagoole.css",
    "css/styles.css"
];

// Load CSS dynamically
function loadCSS(files) {
    files.forEach(file => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = baseUrl + file;
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
        script.src = baseUrl + files[index];
        script.defer = true;

        script.onload = () => {
            index++;
            loadNext(); // load the next one
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
    console.log("All scripts loaded ✅");

    if (typeof initSearchHistory === "function") {
        initSearchHistory();
    } else {
        console.warn("initSearchHistory is still not defined.");
    }
});
