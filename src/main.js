// Nanbar menu for small screens
const mobileMenu = document.getElementById('mobileMenu');
const menuBtn = document.getElementById('mobile-menu-button')
const navMenu = document.getElementById('nav-menu')
const navItem = document.getElementsByClassName('nav-item')

const openMenu = () => {
    // Display navMenu
    if (navMenu.style.display == 'none' || navMenu.style.display == '') {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
}

menuBtn.addEventListener('click', openMenu);
