const loginForm = document.getElementById('form-login');
const registerForm = document.getElementById('form-register');

const validateEmail = (email, label) => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(label, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setError(label, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(label);
        return true;
    }
};

const validatePassword = (password, label) => {
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        setError(label, 'Password is required');
        return false;
    } else if (passwordValue.length < 5) {
        setError(label, 'Password must be at least 5 characters');
        return false;
    } else {
        setSuccess(label);
        return true;
    }
};

const validateUsername = (username, label) => {
    const usernameValue = username.value.trim();

    if (usernameValue === '') {
        setError(label, 'Username is required');
        return false;
    } else {
        setSuccess(label);
        return true;
    }
};

const validateConfirmPassword = (password, confirmPassword, label) => {
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (confirmPasswordValue === '') {
        setError(label, 'Please confirm your password');
        return false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(label, 'Passwords do not match');
        return false;
    } else {
        setSuccess(label);
        return true;
    }
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        const email = document.getElementById('email-login');
        const labelEmail = document.getElementById('label-email-login');
        const password = document.getElementById('password-login');
        const labelPassword = document.getElementById('label-password-login');

        const isEmailValid = validateEmail(email, labelEmail);
        const isPasswordValid = validatePassword(password, labelPassword);

        if (!isEmailValid || !isPasswordValid) {
            e.preventDefault();
        }
    });
}
if (registerForm) {
    registerForm.addEventListener('submit', e => {
        const username = document.getElementById('username-register');
        const labelUsername = document.getElementById('label-username-register');
        const email = document.getElementById('email-register');
        const labelEmail = document.getElementById('label-email-register');
        const password = document.getElementById('password-register');
        const labelPassword = document.getElementById('label-password-register');
        const confirmPassword = document.getElementById('password2-register');
        const labelConfirmPassword = document.getElementById('label-password2-register');

        const isUsernameValid = validateUsername(username, labelUsername);
        const isEmailValid = validateEmail(email, labelEmail);
        const isPasswordValid = validatePassword(password, labelPassword);
        const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword, labelConfirmPassword);

        if (!isUsernameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
            e.preventDefault();
        }
    });
}