// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("menu.json")
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById("menu-container");
            data.forEach(item => {
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url; 
                menuContainer.appendChild(menuItem);
            });
        })
        .catch(error => console.error("Error fetching menu:", error));
});

function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (disability)
function validateAIM() {
    window.open("https://wave.webaim.org/report#/", "_blank");
}