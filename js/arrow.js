// Function to add arrow
function addArrow(targetElementId, displayElementId, color = "green") {
    const targetElement = document.getElementById(targetElementId);
    const displayElement = document.getElementById(displayElementId);

    if (!targetElement || !displayElement) return -1; // safety check

    //console.log("targetElement:", targetElement);
    //console.log("displayElement:", displayElement);

    // Get bounding box
    const rect = targetElement.getBoundingClientRect();
    const rectdisplayElement = displayElement.getBoundingClientRect();
    console.log("rectdisplayElement:", rectdisplayElement.top, rectdisplayElement.left, rectdisplayElement.width, rectdisplayElement.height);

    // Create arrow element
    const arrow = document.createElement("div");
    arrow.id = "arrow-mark"; // ensure unique ID
    arrow.style.display = "block"; // make sure it's visible
    arrow.style.zIndex = 2147483647;

    // Apply styles directly via JS
    arrow.style.position = "absolute";
    arrow.style.width = "0";
    arrow.style.height = "0";
    arrow.style.borderLeft = "12px solid transparent";
    arrow.style.borderRight = "12px solid transparent";
    arrow.style.borderBottom = `12px solid ${color}`;

    // Position arrow relative to the **page**
    console.log(window.scrollX);
    //arrow.style.top = -10 + "px"; // 4px below
    //arrow.style.bottom = rectdisplayElement.top + "px"; // 4px below
    arrow.style.left = (rectdisplayElement.width / 2) + "px"; // center horizontally
    arrow.style.transform = "translateX(-50%)";

    // Append arrow to the body (not the displayElement itself)
    //displayElement.appendChild(arrow);
    displayElement.appendChild(arrow, displayElement);
    //console.log("Arrow added", arrow);

    return arrow;
}

// Usage example:
//addArrow("btnAppsList", "myBox", "green");


// Example usage
//addArrow(document.getElementById("allApps", "red"));            // default white
//addArrow(document.getElementById("menu-item2"), "#10c94b"); // green

function bindElements(targetId, elementId, offsetY = 10) {
  const target = document.getElementById(targetId);
  const elem = document.getElementById(elementId);

  if (!target || !elem) return;

  // Make sure the bound element is positioned absolutely
  elem.style.position = "absolute";

  // Function to update position
  function updatePosition() {
    const rect = target.getBoundingClientRect();
    elem.style.top = `${window.scrollY + rect.bottom + offsetY}px`;
    elem.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
    elem.style.transform = "translateX(-50%)";
  }

  // Initial positioning
  updatePosition();

  // Recalculate position on scroll & resize
  window.addEventListener("scroll", updatePosition);
  window.addEventListener("resize", updatePosition);

  return elem;
}

// Example usage:
// Suppose you already have <div id="myBox">Hello</div>
bindElements("btnAppsList", "myBox");
