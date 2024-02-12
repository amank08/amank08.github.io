function updateDateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});
    var dayOfWeek = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(now);
    var dateString = now.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});

    var datetimeElement = document.getElementById('datetime');
    datetimeElement.innerHTML = "Today is " + timeString + " on " + dayOfWeek + ", " + dateString;
}

updateDateTime();
setInterval(updateDateTime, 60000);
