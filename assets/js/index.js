const [form] = document.getElementsByTagName('form');
const inputPassword = document.getElementById('password');
const submitButton = document.getElementById('submitBtn');

const regExpPassword = /(?=)[\w%^&*#@]{8,40}/;
form.addEventListener('submit', buttonHandler);

function buttonHandler(event) {
    event.preventDefault();
    const { value } = inputPassword;
    if (isValidPassword(regExpPassword, value)) {
        inputPassword.classList.add('validPassword');
        inputPassword.classList.remove('invalidPassword');
    } else {
        inputPassword.classList.add('invalidPassword');
        inputPassword.classList.remove('validPassword');
    }
}

function isValidPassword(regexp, password) {
    return regexp.test(password);
}