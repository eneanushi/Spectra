// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Basic scroll reveal
    const scrollRevealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                scrollObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, scrollRevealOptions);

    // Observe all elements with scroll animation classes
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .stagger-children, .flex.flex-col.gap-3.pb-3').forEach(elem => {
        scrollObserver.observe(elem);
    });

    // Parallax scroll effect
    const parallaxElements = document.querySelectorAll('.parallax-scroll');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(elem => {
            const speed = elem.dataset.speed || 0.5;
            const rect = elem.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const translateY = scrolled * speed;
                elem.style.transform = `translateY(${translateY}px)`;
            }
        });
    });

    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 