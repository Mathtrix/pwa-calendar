document.addEventListener("DOMContentLoaded", function () {
    const calendarDiv = document.getElementById("calendar");
    const eventInput = document.getElementById("eventText");
    const loginContainer = document.getElementById("login-container");
    const calendarContainer = document.getElementById("calendar-container");

    auth.onAuthStateChanged(user => {
        if (user) {
            loginContainer.style.display = "none";
            calendarContainer.style.display = "block";
            loadEvents(user.uid);
        }
    });

    function loadEvents(userId) {
        db.collection("events").where("userId", "==", userId)
            .onSnapshot(snapshot => {
                calendarDiv.innerHTML = "<h3>Events:</h3>";
                snapshot.forEach(doc => {
                    const event = doc.data();
                    calendarDiv.innerHTML += `<p>${event.text} (Added: ${event.date})</p>`;
                });
            });
    }

    window.addEvent = function () {
        const user = auth.currentUser;
        if (!user) {
            alert("Please log in first!");
            return;
        }

        const text = eventInput.value;
        if (text) {
            db.collection("events").add({
                userId: user.uid,
                text: text,
                date: new Date().toISOString()
            }).then(() => {
                eventInput.value = "";
            });
        }
    };
});