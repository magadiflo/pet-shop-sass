const loginForm = document.querySelector('.header .login-form');

document.getElementById('login-btn').onclick = () => {
    loginForm.classList.toggle('login-form--active');
    navbar.classList.remove('header__navbar--active');
}

const navbar = document.querySelector('.header .header__navbar');

document.getElementById('menu-btn').onclick = () => {
    navbar.classList.toggle('header__navbar--active');
    loginForm.classList.remove('login-form--active');
}

window.onscroll = () => {
    loginForm.classList.remove('login-form--active');
    navbar.classList.remove('header__navbar--active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('header--active');
    } else {
        document.querySelector('.header').classList.add('header--active');
    }
}

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('header--active');
    } else {
        document.querySelector('.header').classList.add('header--active');
    }
}