document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-inview');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.wave-reveal').forEach(el => observer.observe(el));

    // Header transparente al hacer scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hero inicial
    setTimeout(() => {
        document.querySelectorAll('.hero .wave-reveal').forEach(el => el.classList.add('is-inview'));
    }, 100);
});
