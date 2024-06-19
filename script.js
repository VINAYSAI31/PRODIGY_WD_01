document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 750) {
            navbar.style.backgroundColor = 'lavender';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });
});
