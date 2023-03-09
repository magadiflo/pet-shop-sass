let loginForm = document.querySelector('.header .login-form');

document.getElementById('login-btn').onclick = () => {
    loginForm.classList.toggle('login-form--active');
}