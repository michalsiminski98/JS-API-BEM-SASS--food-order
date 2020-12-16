let users = ['user123@mail.com'];
let passwords = ['password'];

const logInForm = document.querySelector('.login-wrapper__form')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submit = document.querySelector('[type=submit]');
const register = document.querySelector('.login-wrapper__register');

const logIn = (e) => {
    e.preventDefault();
    //check if the clients wants log or create an account
    // log in
    if (register.style.backgroundColor === '') {
        for (let i = 0; i < passwords.length; i++) {
            if (emailInput.value === users[i] && passwordInput.value === passwords[i]) {
                return (alert('You are logged in.'),
                    document.querySelector('.navigation__list-element--favourites').style.display = 'list-item',
                    document.querySelector('.navigation__list-element--recipes').style.display = 'list-item',
                    emailInput.value = '',
                    passwordInput.value = '');
            }
        }
        alert('Wrong email or password');
        // create account
    } else {
        if (users.includes(emailInput.value)) {
            alert("This e-mail is already use");
        } else {
            users.push(emailInput.value);
            passwords.push(passwordInput.value);
            alert("You created an account")
        }
    }
    emailInput.value = '';
    passwordInput.value = '';
}

// new account button
const registerActive = () => {
    if (register.style.backgroundColor === '') {
        register.style.backgroundColor = 'black';
        submit.value = 'Register';
    } else {
        register.style.backgroundColor = '';
        submit.value = 'Log in';
    }
}


logInForm.addEventListener('submit', logIn);
register.addEventListener('click', registerActive);