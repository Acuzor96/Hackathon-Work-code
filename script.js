window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    let parallax = document.querySelector('.parallax');
    parallax.style.transform = 'translateZ(' + scrollTop / 2 + 'px) scale(3)';
});
