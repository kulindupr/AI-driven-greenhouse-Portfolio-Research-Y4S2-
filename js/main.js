const themeToggleBtn = document.getElementById('darkModeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    themeIcon.classList.remove('ph-moon');
    themeIcon.classList.add('ph-sun');
} else {
    htmlElement.classList.remove('dark');
    themeIcon.classList.remove('ph-sun');
    themeIcon.classList.add('ph-moon');
}

themeToggleBtn.addEventListener('click', function () {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
        themeIcon.classList.remove('ph-sun');
        themeIcon.classList.add('ph-moon');
    } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
        themeIcon.classList.remove('ph-moon');
        themeIcon.classList.add('ph-sun');
    }
});
