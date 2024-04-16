
// Refactored code to create a dropdown menu
submenuToggle.forEach((btn, index) => {
    const targetSubmenu = submenu[index];

    // Event listener for click
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Toggle 'active' class on the submenu
        targetSubmenu.classList.toggle('active');

        // Close other submenus
        const otherSubmenus = submenu.filter((_, i) => i !== index);
        otherSubmenus.forEach(sub => sub.classList.remove('active'));
    });

    // Event listener for clicking outside the dropdown
    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !targetSubmenu.contains(e.target)) {
            targetSubmenu.classList.remove('active');
        }
    });
});
