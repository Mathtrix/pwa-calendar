document.addEventListener("DOMContentLoaded", function () {
    const calendarDiv = document.getElementById("calendar");
    const events = JSON.parse(localStorage.getItem("events")) || [];

    function renderCalendar() {
        const today = new Date();
        calendarDiv.innerHTML = `<h2>${today.toDateString()}</h2>`;
        renderEvents();
    }

    function renderEvents() {
        calendarDiv.innerHTML += "<h3>Events:</h3>";
        events.forEach(event => {
            calendarDiv.innerHTML += `<p>${event}</p>`;
        });

        calendarDiv.innerHTML += `
            <input type="text" id="eventText" placeholder="New Event">
            <button onclick="addEvent()">Add Event</button>
        `;
    }

    window.addEvent = function () {
        const eventText = document.getElementById("eventText").value;
        if (eventText) {
            events.push(eventText);
            localStorage.setItem("events", JSON.stringify(events));
            renderCalendar();
        }
    };

    renderCalendar();
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker Registered"))
        .catch(err => console.log("Service Worker Registration Failed", err));
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault(); // Prevent auto-prompt
    deferredPrompt = event;

    // Show the install button
    const installBtn = document.getElementById("installBtn");
    installBtn.style.display = "block";

    installBtn.addEventListener("click", () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the PWA install");
            } else {
                console.log("User dismissed the PWA install");
            }
            deferredPrompt = null;
        });
    });
});