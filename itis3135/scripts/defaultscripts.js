document.addEventListener('DOMContentLoaded', function() {
    var currentTimeElement = document.getElementById('current-time');
    var currentDate = new Date();
    currentTimeElement.textContent = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
                                    ' on ' + currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('user-info').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var mood = document.getElementById('mood').value;
        document.getElementById('greeting').textContent = "The Awesome Koala welcomes you, " + name + "! We're glad you are doing " + mood + "!";
    });
});

function showPolygonName() {
    const numberInput = document.getElementById('favorite-number').value;
    const absoluteNumber = Math.abs(parseInt(numberInput));
    const polygonNames = ['Henagon','Digon','Trigon','Tetragon','Pentagon','Hexagon','Heptagon','Octagon','Nonagon','Decagon'];
    const polygonName = (absoluteNumber < 11) ? polygonNames[absoluteNumber-1] : 'Invalid Input';
    alert('The name of the polygon with ' + absoluteNumber + ' sides is ' + polygonName);
}

function suggestBottleColor() {
    const colors = ["Red", "Blue", "Green", "Purple", "Black", "White", "Orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    alert("Suggested Bottle Color: " + randomColor);
}

function calculateHydrationNeed() {
    const weight = prompt("Enter your weight in kg:");
    if (weight) {
        const hydrationNeed = weight * 0.033; 
        alert("You should drink about " + hydrationNeed.toFixed(2) + " liters of water per day.");
    }
}

function generateCustomizationIdea() {
    const ideas = ["Add your initials", "Engrave a favorite quote", "Decorate with stickers", "Attach a carrying strap"];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    alert("Customization Idea: " + randomIdea);
}

function estimateTimeToFillBottle() {
    const size = parseFloat(prompt("Enter the bottle size in liters:"));
    const flowRate = parseFloat(prompt("Enter the flow rate in liters per minute (e.g., from a tap):"));
    if (size > 0 && flowRate > 0) {
        const timeToFill = size / flowRate;
        alert("Estimated time to fill the bottle: " + timeToFill.toFixed(2) + " minutes.");
    }
}

