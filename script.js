document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Sticky Navbar shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Handle Form Submission
    const form = document.getElementById('lead-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit');
        const originalText = btn.textContent;
        
        btn.textContent = 'Sending...';
        btn.style.opacity = '0.7';

        // Simulate API call
        setTimeout(() => {
            btn.textContent = 'Requirement Submitted!';
            btn.style.background = '#10b981'; // Green
            btn.style.opacity = '1';
            
            form.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))';
            }, 3000);
        }, 1500);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
