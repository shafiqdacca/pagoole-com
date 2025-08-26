// Add a beforeunload event listener to the window
window.addEventListener('beforeunload', function (event) {
    console.log(event);
    console.log('Executing function before redirect...');
    if (!navigator.onLine) {
        event.preventDefault();
        console.log("No internet connection. Please check your connection and try again.");
    }
    addLoading();
});

function addLoading() {
    // If popup already exists, remove it first
    var existingPopup = document.getElementById('loading-popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create popup div
    var popupDiv = document.createElement('div');
    popupDiv.setAttribute('id', 'loading-popup');
    popupDiv.className = 'loading-popup pf';
    popupDiv.innerHTML = '<span class="loader"></span>';
    document.body.appendChild(popupDiv);

    var timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.textContent = 'Page loading...';
    popupDiv.appendChild(timerElement);

    var startTime = performance.now();

    function updateTimer() {
        var currentTime = performance.now();
        var elapsedTime = (currentTime - startTime) / 1000;
        var countdown = Math.round(elapsedTime);

        var displayTime;
        if (countdown >= 60) {
            var minutes = Math.floor(countdown / 60);
            var seconds = countdown % 60;
            displayTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        } else {
            displayTime = '00:' + countdown.toString().padStart(2, '0');
        }

        timerElement.innerHTML = displayTime;

        if (countdown >= 100000) {
            clearInterval(timerInterval);
            popupDiv.remove();
        }
    }

    var timerInterval = setInterval(updateTimer, 1000);

    // Remove popup on any click (anywhere in the document)
    document.addEventListener('click', function removePopupOnClick() {
        if (popupDiv && popupDiv.parentNode) {
            popupDiv.remove();
            clearInterval(timerInterval);
        }
        // Unbind this event so it doesn't fire again
        document.removeEventListener('click', removePopupOnClick);
    });
}
