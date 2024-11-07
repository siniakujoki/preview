const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// Menambahkan efek scroll pada navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Navbar jadi transparan setelah scroll
    } else {
        navbar.classList.remove('scrolled');
    }
});
