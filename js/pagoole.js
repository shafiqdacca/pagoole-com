// The logo text
const logoText = "Pagoole";

// Colors for each letter
const colors = [
    '#FF0000', // P
    '#FF7F00', // a
    '#FFFF00', // g
    '#00FF00', // o
    '#0000FF', // o
    '#4B0082', // l
    '#8B00FF'  // e
];

// Generate logo text for all spans with a given class
function generateLogoTextByClass(className, text, colors) {
    const spanElements = document.querySelectorAll(`.${className}`);
    spanElements.forEach(spanContainer => {
        spanContainer.innerHTML = ''; // clear existing content
        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = text[i];
            letterSpan.style.color = colors[i] || '#000000';
            spanContainer.appendChild(letterSpan);
        }
    });
}

// Set font size for the container div
function setLogoFontSize(divId, size) {
    const div = document.getElementById(divId);
    if (div) div.style.fontSize = size;
}

// Generate the logo
generateLogoTextByClass('pagoole', logoText, colors);

// Set font size of the entire div
//setLogoFontSize('logoDiv', '36px');