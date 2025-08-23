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
    //example usage: generateLogoTextByClass('pagoole', logoText, colors);
    //<!--<span class="pagoole" data-bg="rgba(255, 255, 255, 0.5)" data-text-shadow="1px 1px 2px rgba(0,0,0,0.5)"></span>-->
    
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

function generateLogoTextByClass_old_4(className, text, colors) {
    const spanElements = document.querySelectorAll(`.${className}`);

    spanElements.forEach(spanContainer => {
        spanContainer.innerHTML = ''; // clear existing content
        spanContainer.style.fontFamily = 'fangsong';
        spanContainer.style.display = "inline-block";
        spanContainer.style.borderRadius = "6px";

        // Directly apply background from data-bg (expects rgba(...))
        const bg = spanContainer.getAttribute("data-bg");
        if (bg) {
            spanContainer.style.backgroundColor = bg;
            spanContainer.style.padding = "4px 8px"; // only add padding if background exists
        }

        // Create anchor wrapper (fixed link)
        const anchor = document.createElement('a');
        anchor.href = "https://www.pagoole.com.bd"; // fixed homepage link
        anchor.style.textDecoration = 'none';
        anchor.style.display = 'inline-block';
        spanContainer.appendChild(anchor);

        // Add colored letters
        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = text[i];
            letterSpan.style.color = colors[i] || '#000000';
            anchor.appendChild(letterSpan);
        }
    });
}


function generateLogoTextByClass_old_3(className, text, colors) {
    const spanElements = document.querySelectorAll(`.${className}`);
    spanElements.forEach(spanContainer => {
        spanContainer.innerHTML = ''; // clear existing content
        spanContainer.style.fontFamily = 'fangsong';
        spanContainer.style.display = 'inline-flex'; // keeps letters inline neatly
        spanContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // white with opacity
        spanContainer.style.padding = '2px 4px';
        spanContainer.style.borderRadius = '3px';
        spanContainer.style.margin = '1px';

        // Fixed link wrapper
        const anchor = document.createElement('a');
        anchor.href = "https://www.pagoole.com"; // fixed homepage link
        anchor.style.textDecoration = 'none';
        anchor.style.display = 'inline-block';
        spanContainer.appendChild(anchor);

        // Add colored letters
        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = text[i];
            letterSpan.style.color = colors[i] || '#000000';
            anchor.appendChild(letterSpan);
        }
    });
}

function generateLogoTextByClass_old_2(className, text, colors) {
    const spanElements = document.querySelectorAll(`.${className}`);
    spanElements.forEach(spanContainer => {
        spanContainer.innerHTML = ''; // clear existing content
        spanContainer.style.fontFamily = 'fangsong';
        spanContainer.style.display = 'inline-flex'; // keeps letters inline neatly
        spanContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // white with opacity
        spanContainer.style.padding = '2px 4px';
        spanContainer.style.borderRadius = '3px';
        spanContainer.style.margin = '1px';

        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = text[i];
            letterSpan.style.color = colors[i] || '#000000';
            spanContainer.appendChild(letterSpan);
        }
    });
}

function generateLogoTextByClass_old(className, text, colors) {
    const spanElements = document.querySelectorAll(`.${className}`);
    spanElements.forEach(spanContainer => {
        spanContainer.innerHTML = ''; // clear existing content
        spanContainer.style.fontFamily = 'fangsong';

        // Fixed link wrapper
        const anchor = document.createElement('a');
        anchor.href = "https://www.pagoole.com"; // fixed homepage link
        anchor.style.textDecoration = 'none';
        anchor.style.display = 'inline-block';
        spanContainer.appendChild(anchor);

        // Add colored letters
        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = text[i];
            letterSpan.style.color = colors[i] || '#000000';
            anchor.appendChild(letterSpan);
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


function createLogoPagoole(fontSize = "24px") {
    const wrapper = document.createElement("div");
    const logo = document.createElement("div");

    logo.className = "company-logo24";
    logo.style.fontFamily = "fangsong";
    logo.style.fontSize = fontSize;

    const letters = [
        { char: "P", color: "#00ff1678" },
        { char: "a", color: "blue" },
        { char: "g", color: "red" },
        { char: "o", color: "#00a400" },
        { char: "o", color: "#1877f2" },
        { char: "l", color: "rgb(78, 108, 7)" },
        { char: "e", color: "#b300ff" }
    ];

    letters.forEach(({ char, color }) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.color = color;
        logo.appendChild(span);
    });

    wrapper.appendChild(logo);
    return wrapper;
}

// Example usage:
//document.body.appendChild(createLogoPagoole("32px"));
