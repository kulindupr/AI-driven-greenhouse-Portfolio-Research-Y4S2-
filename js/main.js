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

// App Screenshots Carousel Logic
const screenshots = [
    "images/AppUi/Home.jpeg",
    "images/AppUi/Climate-control-screen.jpeg",
    "images/AppUi/Diseases-detection-screen.jpeg",
    "images/AppUi/Soil-health-screen.jpeg",
    "images/AppUi/Monitor-tab.jpeg",
    "images/AppUi/Control-tab.jpeg",
    "images/AppUi/Alerts-tab.jpeg"
];

let currentIdx = 0;
const leftImg = document.getElementById('screenshot-left');
const centerImg = document.getElementById('screenshot-center');
const rightImg = document.getElementById('screenshot-right');
const btnPrev = document.getElementById('btn-prev-screenshot');
const btnNext = document.getElementById('btn-next-screenshot');

if (leftImg && centerImg && rightImg && btnPrev && btnNext) {
    function updateCarousel() {
        const prevIdx = (currentIdx - 1 + screenshots.length) % screenshots.length;
        const nextIdx = (currentIdx + 1) % screenshots.length;
        
        leftImg.src = screenshots[prevIdx];
        centerImg.src = screenshots[currentIdx];
        rightImg.src = screenshots[nextIdx];
    }

    btnPrev.addEventListener('click', () => {
        currentIdx = (currentIdx - 1 + screenshots.length) % screenshots.length;
        updateCarousel();
    });

    btnNext.addEventListener('click', () => {
        currentIdx = (currentIdx + 1) % screenshots.length;
        updateCarousel();
    });

    // Initialize
    updateCarousel();
}

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
