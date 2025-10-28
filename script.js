document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add a simple effect for the CTA button on click
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    ctaButton.textContent = 'Exploring Projects...';
    setTimeout(() => {
        ctaButton.textContent = 'View My Projects';
    }, 1000);
});
