//var logoText = "Pagoole";

// Example Useage:
// <span class="pagoole"></span>
// <span class="pagoole" data-bg="rgba(255, 255, 255, 0.3)"></span>
// <span class="pagoole" data-bg="rgba(255, 255, 255, 0.5)" data-text-shadow="1px 1px 2px rgba(0,0,0,0.5)"></span>

// Generate logo text for all spans with a given class
function generateLogoTextByClass(className, text) {
    //<!--<span class="pagoole" data-bg="rgba(255, 255, 255, 0.5)" data-text-shadow="1px 1px 2px rgba(0,0,0,0.5)"></span>-->
    const colors = [
        'rgb(234, 67, 53)', // P
        'rgb(66, 133, 244)', // a
        '#00FF00', // g
        'rgb(251, 188, 5)', // o
        '#00FF00', // o
        'rgb(66, 133, 244)', // l
        'rgb(234, 67, 53)'  // e
    ];
    const spanElements = document.querySelectorAll(`.${className}`);

    spanElements.forEach(spanContainer => {
        spanContainer.innerHTML = ''; // clear existing content
        spanContainer.style.fontFamily = 'fangsong';
        spanContainer.style.display = "inline-block";
        spanContainer.style.borderRadius = "6px";

        // Apply background if data-bg exists
        const bg = spanContainer.getAttribute("data-bg");
        if (bg) {
            spanContainer.style.backgroundColor = bg;
            spanContainer.style.padding = "4px 8px"; // only if background exists
        }

        // Apply text-shadow if data-text-shadow exists
        const textShadow = spanContainer.getAttribute("data-text-shadow");

        // Create anchor wrapper
        const anchor = document.createElement('a');
        anchor.href = "https://www.pagoole.com"; // fixed link
        anchor.style.textDecoration = 'none';
        anchor.style.display = 'inline-block';
        spanContainer.appendChild(anchor);

        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = text[i];
            letterSpan.style.color = colors[i] || '#000000';
            if (textShadow) {
                letterSpan.style.textShadow = textShadow;
            }
            anchor.appendChild(letterSpan);
        }
    });
}

// Generate the logo
if (typeof generateLogoTextByClass === "function") {
  generateLogoTextByClass('pagoole', 'Pagoole');
}