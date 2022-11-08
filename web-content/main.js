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
            setFormMessage(createAccountForm, "error", "Please try again");
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
    alert('We do hope you would purchase items from us next time')
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
    var cartRowContents = `<article class = "cart-item cart-column menu_list">
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
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
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

// DISPLAYING NOTIFICATION BADGE

function showBadge() {
    var noteB = document.getElementById("badge");

    noteB.classList.add("show-badge");
}
function removeBadge() {
    var noteB = document.getElementById("badge");

    noteB.classList.remove("show-badge");

}


// CART DATE DISPLAY

function displayDate(){

    var dateTime = new Date ();
    var yr = dateTime.getFullYear();
    var mth = dateTime.getMonth() + 1;
    var dy = dateTime.getDay();
    var hr = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var dat = dateTime.getDate();
    let weekDays = document.getElementById('day');
    let greeting = document.getElementById('mode');
    let welcome = document.getElementById('modeT');
    let net = document.getElementById('dayT');

// day switch for cart pop up
    days = (dy == 1)? weekDays.innerHTML = "Monday":
        (dy == 2)? weekDays.innerHTML = "Tuesday":
        (dy == 3)? weekDays.innerHTML = "Wednesday":
        (dy == 4)? weekDays.innerHTML = "Thursday":
        (dy == 5)? weekDays.innerHTML = "Friday":
        (dy == 6)? weekDays.innerHTML = "Saturday":
        weekDays.innerHTML = "Sunday";

        if (mins <=9){
            mins="0"+mins;
        }

        if (hr > 12){
            hr = hr - 12;
            greet = greeting.innerHTML = "pm";
        }
        else {
            greet = greeting.innerHTML = "am" ;
        }

// day switch for delivery pop-up
        if (dy >= 0){
            switch(dy){
                case 0: 
                net.innerHTML = "Sunday";
                break;
                case 1: 
                net.innerHTML = "Monday";
                break;
                case 2:
                net.innerHTML = "Tuesday";
                break;
                case 3:
                net.innerHTML = "Wednesday";
                break;
                case 4:
                net.innerHTML = "Thursday";
                break;
                case 5:
                net.innerHTML = "Friday";
                break;
                default:
                net.innerHTML = "Saturday";
            }
        }
        
    // mode for delivery pop-up
      if (mins < 720){
        welcome = welcome.innerHTML = "pm";
      }
      else {
        welcome = welcome.innerHTML = "am";
      }


    
// FUNCTION TO DISPLAY TIME ON POP-UP BOXES
document.querySelectorAll('.min').forEach((dateElement) => dateElement.innerHTML = mins)
document.querySelectorAll('.hrs').forEach((dateElement) => dateElement.innerHTML = hr)
document.querySelectorAll('.date').forEach((dateElement) => dateElement.innerHTML = dat)
document.querySelectorAll('.month').forEach((dateElement) => dateElement.innerHTML = mth)
document.querySelectorAll('.year').forEach((dateElement) => dateElement.innerHTML = yr)
}
setInterval(displayDate, 10);

// DISPLAYING DELIVERY INFORMATION

function openInfo() {
    var info = document.getElementById("showInfo");

    info.classList.add("open-info");
}
function closeInfo() {
    var info = document.getElementById("showInfo");

    info.classList.remove("open-info");
}

// DISPLAYING UPDATED CART

function showUpdate() {
    let vatSection = document.querySelector(".link_total");
    let catTitle = document.querySelector(".cart-total-title");
    let cofBot = document.querySelector(".btn-confirm");
    let nextBot = document.querySelector(".pre-order");
    let present = document.querySelector(".present-order");
    let isShow = true;

    if (isShow){
        vatSection.style.display = "block";
        catTitle.style.display = "none";
        cofBot.style.display = "none";
        nextBot.style.display = "flex";
        present.style.display = "flex";
        isShow = false;
    }
}

function hideUpdate() {
    let vatSection = document.querySelector(".link_total");
    let catTitle = document.querySelector(".cart-total-title");
    let cofBot = document.querySelector(".btn-confirm");
    let nextBot = document.querySelector(".pre-order");
    let present = document.querySelector(".present-order");
    let isShow = true;

    if (isShow) {
        vatSection.style.display = "none";
        catTitle.style.display = "block";
        cofBot.style.display = "flex";
        nextBot.style.display = "none";
        present.style.display = "none";
        isShow = true;
    }
}

// function payUpdate(){
//     let previousP = parseInt(document.getElementById("oldP").value);
//     console.log(previousP);
//     var vatP = parseInt(document.getElementById("vatP").value);
//     var deliveryP = parseInt(document.getElementById("delivP").value);
//     var mainP = document.getElementById("mainP");


//     mainP.value = deliveryP + vatP;

//     document.getElementsByClassName('cart-total-price')[0].innerText = '#' + mainP
// }