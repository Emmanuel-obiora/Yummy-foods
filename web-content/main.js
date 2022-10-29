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

// FOR OPENING AND CLOSING SIGNIN/SIGNUP POPUP
let logPop = document.getElementById("signPopup");

function openSignin() {
    logPop.classList.add("open-popup");
}

function closeSignin() {
    logPop.classList.remove("open-popup");
}

// SHOPPING CART (FOR ONCLICK FUNCTION, VIEW, ADD ITEM, PURCHASE ETC)

// CART POP-UP
let cartPop = document.getElementById("showCart");

function openCart() {
    cartPop.classList.add("open-cart");
}

function closeCart() {
    cartPop.classList.remove("open-cart");
}

// FUNCTIONALITIES FOR CART. (FROM ADD, DELETE AND PRICING ETC)

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <article class = "cart-item cart-column menu_list">
            <div class="image">
                <img  class="cart-item-image" src="${imageSrc}" alt="${title}" >
            </div>
            <h3 class="cart-item-title">${title}</h3>
            <div class="item-adder">
            <button type="button" title="reduce">-</button>
            <input class="numD cart-quantity-input" type="number" title="item-number" value="1"></input>
            <button type="button" title="increase">+</button>
            </div>
            <span class="amf cart-price cart-column">${price}</span>
            <div class="split">
            <span><i class="fas fa-heart"></i></span>
            <span class="btn-danger"><i class="fas fa-trash-alt"></i></span>
            </div>
        </article>`

    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('#', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '#' + total
}