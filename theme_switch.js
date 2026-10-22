function applySavedTheme() {
    const savedTheme = localStorage.getItem('globalTheme');
    if (savedTheme) {
        const themeLink = document.getElementById('theme-style');
        if (themeLink) {
            themeLink.setAttribute('href', savedTheme);
        }
    }
}

function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    if (themeLink) {
        const currentTheme = themeLink.getAttribute('href');
        if (currentTheme === 'style1.css') {
            const newTheme = 'style2.css';
            themeLink.setAttribute('href', newTheme);
            localStorage.setItem('globalTheme', newTheme);
        } 
        else {
            const newTheme = 'style1.css';
            themeLink.setAttribute('href', newTheme);
            localStorage.setItem('globalTheme', newTheme);
        }
    }
}

applySavedTheme();