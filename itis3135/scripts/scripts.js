document.addEventListener('DOMContentLoaded', function() {
    // Function to display current time, day of the week, and date
    var currentTimeElement = document.getElementById('current-time');
    var currentDate = new Date();
    currentTimeElement.textContent = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
                                    ' on ' + currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Function to greet the user with their name and mood
    document.getElementById('user-info').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var mood = document.getElementById('mood').value;
        document.getElementById('greeting').textContent = "The My Animal Brand Company welcomes you, " + name + "! We're glad you are feeling " + mood + "!";
    });
});

// Function to show the name of the polygon based on the user's favorite number
function showPolygonName() {
    var numberInput = document.getElementById('favorite-number').value;
    var absoluteNumber = Math.abs(parseInt(numberInput));
    var polygonName = '';
    switch(absoluteNumber) {
        case 0:
            polygonName = 'Nilgon';
            break;
        case 1:
            polygonName = 'Henagon';
            break;
        case 2:
            polygonName = 'Digon';
            break;
        case 3:
            polygonName = 'Trigon';
            break;
        case 4:
            polygonName = 'Tetragon';
            break;
        case 5:
            polygonName = 'Pentagon';
            break;
        case 6:
            polygonName = 'Hexagon';
            break;
        case 7:
            polygonName = 'Heptagon';
            break;
        case 8:
            polygonName = 'Octagon';
            break;
        case 9:
            polygonName = 'Nonagon';
            break;
        case 10:
            polygonName = 'Decagon';
            break;
        default:
            polygonName = 'Invalid Input';
    }
    alert('The name of the polygon with ' + absoluteNumber + ' sides is ' + polygonName);
}

// Function 1
function function1() {
    // Code for function 1
}

// Function 2
function function2() {
    // Code for function 2
}

// Function 3
function function3() {
    // Code for function 3
}

// Function 4
function function4() {
    // Code for function 4
}
