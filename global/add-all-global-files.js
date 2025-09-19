const baseUrl = "https://pagoole.com/"; // change this to your domain

// List of JS files (relative paths)
const scripts = [
    "js/scripts.js",
    //"/js/search-suggessions.js",
    "js/pagoole.js",
    "js/loading.js",
    //"/js/header.js",
    "js/footer.js"
];

// Function to load all scripts
function loadScripts(fileList) {
    fileList.forEach(file => {
        const script = document.createElement("script");
        script.src = baseUrl + file;
        script.defer = true; // ensures they load after parsing
        document.head.appendChild(script);
    });
}

// CSS files list
const cssFiles = [
    "css/global-css.css",
    "css/header-footer-report-project.css",
    "css/custom.css",
    "css/loading.css",
    "css/footer.css",
    "css/pagoole.css"
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

// Load them
loadCSS(cssFiles);
loadScripts(scripts);
initSearchHistory();