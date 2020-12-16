let users = ['user123@mail.com'];
let passwords = ['password'];

const logInForm = document.querySelector('.login-wrapper__form')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submit = document.querySelector('[type=submit]');

const logIn = (e) => {
    e.preventDefault();
    for (let i = 0; i < passwords.length; i++) {
        if (emailInput.value === users[i] && passwordInput.value === passwords[i]) {
            return (alert('You are logged in.'),
                document.querySelector('.navigation__list-element--favourites').style.display = 'list-item',
                document.querySelector('.navigation__list-element--recipes').style.display = 'list-item')
        }
    }
    alert('Wrong email or password');
    emailInput.value = '';
    passwordInput.value = '';
}

logInForm.addEventListener('submit', logIn);