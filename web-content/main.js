// =====================JAVASCRIPT FOR LOGIN/SIGNUP PAGE =============================
var pass = document.getElementById("signupPassword");
var conf = document.getElementById("confirmPass");

let first = pass.innerHTML;
let last = conf.innerHTML;

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove(".form__message--success", ".form__message--error");
    message.Element.classList.add(`.form__message--${type}`);
}

// setForMessage(loginForm, "success", "You're logged in!");

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');
    
    document.querySelector('#linkCreateAccount').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector('#linkLogin').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password must be at least 8 character in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        if (first == last) {
            setFormMessage(createAccountForm, "error", "Wrong Password ");
        }
    });
});


// nav bar responsive
var menuItem = false;
function menuBar(){
    if(menuItem){
        document.getElementById("onOff").style.display="none";
        menuItem = false;
    }
    else {
        document.getElementById("onOff").style.display="block";
        menuItem = true;
    }
}

// Reveal Passwords
var state = false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("signupPassword").setAttribute("type", "password");
        document.getElementById("eye").style.colour="#7a797e";
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("signupPassword").setAttribute("type", "text");
        document.getElementById("eye").style.colour="#5887ef";
        state = true;
    }
}

var check = false;
function tog(){
    if(check){
        document.getElementById("confirmPass").setAttribute("type", "password");
        document.getElementById("iron").style.colour="#7a797e";
        check = false;
    }
    else {
        document.getElementById("confirmPass").setAttribute("type", "text");
        document.getElementById("iron").style.colour="#5887ef";
        check = true;
    }
}
