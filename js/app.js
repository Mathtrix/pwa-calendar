document.addEventListener("DOMContentLoaded", function () {
    const calendarDiv = document.getElementById("calendar");

    function renderCalendar() {
        const today = new Date();
        calendarDiv.innerHTML = `<h2>${today.toDateString()}</h2>`;
    }

    renderCalendar();
});