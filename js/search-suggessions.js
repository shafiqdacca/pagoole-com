/* this file does not require css reference file */
function initSearchHistory() {
    const searchBox = document.getElementById("searchBox");
    const searchSuggestions = document.getElementById("searchSuggestions");

    // Load history from localStorage
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    function updateSuggestions() {
        // Match width with searchBox
        searchSuggestions.style.width = searchBox.offsetWidth + "px";
        searchSuggestions.innerHTML = "";

        if (searchHistory.length === 0) {
            searchSuggestions.style.display = "none";
            return;
        }

        // Scrollable container for items
        const suggestionsContainer = document.createElement("div");
        suggestionsContainer.className = "suggestions";
        suggestionsContainer.style.maxHeight = "300px"; // adjust as needed
        suggestionsContainer.style.overflowY = "auto";

        // Add search history items
        searchHistory.forEach((item, index) => {
            const div = document.createElement("div");
            div.style.display = "flex";
            div.style.justifyContent = "space-between";
            div.style.alignItems = "center";
            div.style.padding = "3px";
            div.style.cursor = "pointer";

            // Hover effect with JS
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "#8aee7d54"; // light gray on hover
            });
            div.addEventListener("mouseleave", () => {
                div.style.backgroundColor = "transparent"; // reset
            });

            // Item text container (icon + text)
            const textContainer = document.createElement("span");
            textContainer.style.display = "flex";
            textContainer.style.alignItems = "center";

            // History icon (Unicode or use emoji)
            const historyIcon = document.createElement("span");
            historyIcon.textContent = "⏱"; // or "🔄"
            historyIcon.style.marginRight = "6px";
            historyIcon.style.color = "#888";

            // Text
            const span = document.createElement("span");
            span.textContent = item;
            span.onclick = () => {
                searchBox.value = item;
                searchSuggestions.style.display = "none";
            };

            div.onclick = () => {
                searchBox.value = item;
                searchSuggestions.style.display = "none";
            };

            textContainer.appendChild(historyIcon);
            textContainer.appendChild(span);

            // Remove icon
            const removeIcon = document.createElement("span");
            removeIcon.textContent = "×";
            removeIcon.style.color = "red";
            removeIcon.style.fontWeight = "bold";
            removeIcon.style.marginLeft = "10px";
            removeIcon.style.cursor = "pointer";
            removeIcon.style.width = "20px";
            removeIcon.style.height = "20px";
            removeIcon.style.display = "flex";
            removeIcon.style.alignItems = "center";
            removeIcon.style.justifyContent = "center";
            removeIcon.style.borderRadius = "50%";
            removeIcon.style.transition = "background 0.3s";

            // Hover effect
            removeIcon.onmouseenter = () => {
                removeIcon.style.background = "rgba(255,0,0,0.2)";
            };
            removeIcon.onmouseleave = () => {
                removeIcon.style.background = "transparent";
            };

            // Remove action
            removeIcon.onclick = (e) => {
                e.stopPropagation(); // prevent triggering item click
                searchHistory.splice(index, 1); // remove from array
                localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
                updateSuggestions(); // refresh list
            };

            div.appendChild(textContainer);
            div.appendChild(removeIcon);
            suggestionsContainer.appendChild(div);
        });

        searchSuggestions.appendChild(suggestionsContainer);

        // Footer
        const footer = document.createElement("div");
        footer.className = "footer";
        footer.innerHTML = `<a href="advanced-search.html">Advanced Search</a>`;
        footer.style.flexShrink = "0";
        footer.style.padding = "8px";
        footer.style.textAlign = "center";
        footer.style.borderTop = "1px solid #ddd";
        footer.style.background = "#fafafa";
        footer.style.cursor = "pointer";

        // Hover effect with JS
        footer.addEventListener("mouseenter", () => {
            footer.style.backgroundColor = "#f0f0f0";  // light gray on hover
        });
        footer.addEventListener("mouseleave", () => {
            footer.style.backgroundColor = "#fafafa";  // reset
        });

        // Style link inside footer
        const footerLink = footer.querySelector("a");
        footerLink.style.textDecoration = "none";
        footerLink.style.color = "#007BFF"; // blue link
        footerLink.style.fontWeight = "bold";
        footerLink.style.transition = "color 0.2s";

        footerLink.addEventListener("mouseenter", () => {
            footerLink.style.color = "#0056b3"; // darker blue hover
        });
        footerLink.addEventListener("mouseleave", () => {
            footerLink.style.color = "#007BFF";
        });

        searchSuggestions.appendChild(footer);


        // Main container styles
        searchSuggestions.style.display = "flex";
        searchSuggestions.style.flexDirection = "column";
        searchSuggestions.style.position = "absolute";
        searchSuggestions.style.background = "white";
        searchSuggestions.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        searchSuggestions.style.border = "1px solid #ccc";
        searchSuggestions.style.borderRadius = "4px";
        searchSuggestions.style.display = "block";
    }

    // Show suggestions on focus
    searchBox.addEventListener("focus", updateSuggestions);

    // Resize popup on window resize
    window.addEventListener("resize", () => {
        searchSuggestions.style.width = searchBox.offsetWidth + "px";
    });

    // Hide suggestions when clicked outside
    document.addEventListener("click", (e) => {
        if (!searchBox.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.style.display = "none";
        }
    });

    // Handle enter key
    searchBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const term = searchBox.value.trim();
            if (term !== "") {
                // Add new term to history (max 10 unique)
                searchHistory = [term, ...searchHistory.filter(t => t !== term)].slice(0, 10);
                localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
            }
            searchSuggestions.style.display = "none";
        }
    });
}