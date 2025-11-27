const navbar = document.querySelector('.nav-links');
const toggleBtn = document.createElement('button');
toggleBtn.innerHTML = '&#9776;'; 
toggleBtn.classList.add('nav-toggle');
document.querySelector('.navbar').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('mouseenter', () => {
    ctaBtn.style.transform = 'scale(1.1)';
});
ctaBtn.addEventListener('mouseleave', () => {
    ctaBtn.style.transform = 'scale(1)';
});
