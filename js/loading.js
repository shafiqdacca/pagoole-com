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
    // Create popup div
    var popupDiv = document.createElement('div');
    popupDiv.className = 'loading-popup pf w100';
    popupDiv.setAttribute('id', 'loading-popup');
    popupDiv.innerHTML = '<span class="loader"></span>';
    document.body.appendChild(popupDiv);
    //document.body.insertBefore(popupDiv, document.body.firstChild);

    var timerElement = document.createElement('div'); // Create a new <p> element
    timerElement.id = 'timer'; // Set the id attribute
    timerElement.textContent = 'Page loading...'; // Set the initial text content

    popupDiv.appendChild(timerElement);

    var startTime = performance.now(); // Get the start time when the page finishes loading

    function updateTimer() {
        var currentTime = performance.now(); // Get the current time
        var elapsedTime = (currentTime - startTime) / 1000; // Calculate elapsed time in seconds
        var countdown = Math.round(elapsedTime); // Calculate countdown remaining

        // Convert seconds to minutes if countdown exceeds 60 seconds
        var displayTime;
        if (countdown >= 60) {
            var minutes = Math.floor(countdown / 60);
            var seconds = countdown % 60;
            displayTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        } else {
            displayTime = '00:' + countdown.toString().padStart(2, '0');
        }
        var dots = '';
        for (var i = 0; i < countdown % 4; i++) {
            dots += '.';
        }

        // Display countdown timer with dots
        timerElement.innerHTML = displayTime;

        // If countdown reaches 0, stop updating the timer
        if (countdown >= 100000) {
            clearInterval(timerInterval);
            popupDiv.remove();
        }
    }
    // Call updateTimer function every 1000 milliseconds (1 second)
    var timerInterval = setInterval(updateTimer, 1000);
}