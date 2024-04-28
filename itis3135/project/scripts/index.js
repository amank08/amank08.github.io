
/*submenuToggle.forEach((btn, index) => {
    const targetSubmenu = submenu[index];

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        targetSubmenu.classList.toggle('active');

        const otherSubmenus = submenu.filter((_, i) => i !== index);
        otherSubmenus.forEach(sub => sub.classList.remove('active'));
    });

    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !targetSubmenu.contains(e.target)) {
            targetSubmenu.classList.remove('active');
        }
    });
});*/