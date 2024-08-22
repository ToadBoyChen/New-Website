
//Toggle nav bar blur effect
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const body = document.body;
    navbarToggler.addEventListener('click', function () {
        body.classList.toggle('navbar-open');
    });
});