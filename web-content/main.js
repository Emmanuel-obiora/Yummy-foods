// =====================JAVASCRIPT FOR LOGIN/SIGNUP PAGE =============================
function validate() {
    var userEmail = document.getElementById("emailL").value;
    var password = document.getElementById("password").value;
    if (userEmail == null || userEmail == "") {
        alert("Please enter the Email address.");
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    if (password && password.length > 0 && password.length < 8){
        alert("Password must be up to 8 characters");
        return false;
    }
    
}
// ===============TO TOGGLE BETWEEN SIGN-UP AND LOG-IN PAGES=================
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
});
        //================PERFORMING FETCH LOGIN===============
    var localEmail = JSON.parse(localStorage.getItem('email'));
    // console.log(localEmail);
    var login=document.getElementById('login');

    login.addEventListener('submit', function(e){
    e.preventDefault()

    var mailL =document.getElementById('emailL').value
    var passL =document.getElementById('password').value

    // ===VERIFYING A USER'S SIGN IN STATUS=====
    if(localEmail == mailL){
        alert(`You are already signed in ${mailL}`);
        window.history.go(-0);
        return;
    } 
    else{

        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/auths/signin', {
    method: 'POST',
    body: JSON.stringify({
    email:mailL,
    password:passL,

    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
    })
    .then(res => {
        if (res.ok) { 
            alert('Login successful');
            window.history.go(-0);
            console.log("HTTP request successful") }
        else { 
            alert('Wrong Email or Password combination');
            console.log("HTTP request unsuccessful") }
        return res
    })
    .then(function(response){ 
        return response.json()})
        .then(function(data)
        {
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('userId', JSON.stringify(data.data.user._id));
            localStorage.setItem('email', JSON.stringify(data.data.user.email));
            console.log(data);
        }).catch(error => console.error('Error:', error)); 
    } 
    });
    // ===========LOG-OUT A USER==================
    function logOut(){
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('userId');
        alert('You have been logged out');
        window.location.href=('index.html');

    };

    // ===============================VERIFYING USER SIGN UP==================================
    function verify() {
        var userEmail = document.getElementById("email").value;
        var password = document.getElementById("signUpPassword").value;
        var passwordCheck = document.getElementById("confirmPass").value;       
        if (userEmail == null || userEmail == "") {
            alert("Please enter the Email address.");
            return false;
        }
        if (password == null || password == "") {
            alert("Please enter the password.");
            return false;
        }
        if (password !== passwordCheck){
            alert("Password did not match");
            return true;
        }
        if (password.length > 0 && password.length < 8){
            alert("Password must be up to 8 characters");
            return false;
        }
    } 

    var form=document.getElementById('createAccount');

    form.addEventListener('submit', function(e){
    e.preventDefault()

    var mail =document.getElementById('email').value
    var pass =document.getElementById('signUpPassword').value
    var confPass =document.getElementById('confirmPass').value

    localStorage.setItem('email', mail );

        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/auths/signup', {
    method: 'POST',
    body: JSON.stringify({
    email:mail,
    password:pass,
    confirmPassword:confPass,

    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
       }
       })
       .then(res => {
        if (res.ok) { 
            alert("Signup successful");
            window.history.go(-0);
            console.log("HTTP request successful") 
        }
        else { 
            alert("Invalid Email and Password combination");
            console.log("HTTP request unsuccessful") }
    })
       .then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', JSON.stringify(data.data.user._id));
            localStorage.setItem('email', JSON.stringify(data.data.user.email));
        }).catch(error => console.error('Error:', error)); 
    });
// });


// =============================nav bar responsive=============================================
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
};

// ==============================Reveal Passwords=================================
var state = false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("signUpPassword").setAttribute("type", "password");
        document.getElementById("eye").style.colour="#7a797e";
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("signUpPassword").setAttribute("type", "text");
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

// ======================FOR OPENING AND CLOSING SIGNIN/SIGNUP POPUP==========================
let logPop = document.getElementById("signPopup");

function openSignin() {
    logPop.classList.add("open-popup");
}

function closeSignin() {
    logPop.classList.remove("open-popup");
}

// ===================SHOPPING CART (FOR ONCLICK FUNCTION, VIEW, ADD ITEM, PURCHASE ETC)======================

// =================CART POP-UP=================================
let cartPop = document.getElementById("showCart");

function openCart() {
    cartPop.classList.add("open-cart");
}

function closeCart() {
    cartPop.classList.remove("open-cart");
}

// =======================FUNCTIONALITIES FOR CART. (FROM ADD, DELETE AND PRICING ETC)=====================

// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function ready() {
//     var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//     for (var i = 0; i < removeCartItemButtons.length; i++) {
//         var button = removeCartItemButtons[i]
//         button.addEventListener('click', removeCartItem)
//     }

//     var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i]
//         input.addEventListener('change', quantityChanged)
//     }

//     var addToCartButtons = document.getElementsByClassName('shop-item-button')
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i]
//         button.addEventListener('click', addToCartClicked)
//     }

//     document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
// }

// function purchaseClicked() {
//     alert('We do hope you would purchase items from us next time')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     updateCartTotal()
// }

// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.parentElement.remove()
//     updateCartTotal()
// }

// function quantityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }

// function addToCartClicked(event) {
//     var button = event.target
//     var shopItem = button.parentElement.parentElement.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
// }

// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added to the cart')
//             return
//         }
//     }
//     var cartRowContents = `<article class = "cart-item cart-column menu_list">
//             <div class="image">
//                 <img  class="cart-item-image" src="${imageSrc}" alt="${title}" >
//             </div>
//             <h3 class="cart-item-title">${title}</h3>
//             <div class="item-adder">
//             <button type="button" title="reduce" class="minus-d">-</button>
//             <input class="num-d cart-quantity-input" type="number" title="item-number" value="1"></input>
//             <button type="button" title="increase" class="plus-d">+</button>
//             </div>
//             <span class="amf cart-price cart-column">${price}</span>
//             <div class="split">
//             <span><i class="fas fa-heart"></i></span>
//             <span class="btn-danger"><i class="fas fa-trash-alt"></i></span>
//             </div>
//         </article>`

//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
//     updateCartTotal()
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0;
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var price = parseFloat(priceElement.innerText.replace('#', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = '#' + total
// }

// =============================DISPLAYING NOTIFICATION BADGE========================================

function showBadge() {
    var noteB = document.getElementById("badge");

    noteB.classList.add("show-badge");
}
function removeBadge() {
    var noteB = document.getElementById("badge");

    noteB.classList.remove("show-badge");

}


// ========================CART DATE DISPLAY==========================================

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
    let greet;

// =======================day switch for cart pop up=================
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
            bush = welcome.innerHTML = 'pm';
        }
        else {
            greet = greeting.innerHTML = "am" ;
            bush = welcome.innerHTML = 'am';
        }


// ========================day switch for delivery pop-up===========================================
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
        
    //============================== mode for delivery pop-up==========================================

      let hourT = hr + ':' + mins + ' ' + greet + ',' + '  ' + dat + '-' + mth + '-' + yr;

      let fullT = hr + ':' + mins + ' ' + greet + ',' + '  ' + days + ',' + ' ' + dat + '-' + mth + '-' + yr;
    
// ==================FUNCTION TO DISPLAY TIME ON POP-UP BOXES==========================
document.querySelectorAll('.min').forEach((dateElement) => dateElement.innerHTML = mins)
document.querySelectorAll('.hrs').forEach((dateElement) => dateElement.innerHTML = hr)
document.querySelectorAll('.date').forEach((dateElement) => dateElement.innerHTML = dat)
document.querySelectorAll('.month').forEach((dateElement) => dateElement.innerHTML = mth)
document.querySelectorAll('.year').forEach((dateElement) => dateElement.innerHTML = yr)

document.querySelectorAll('.time-guide').forEach((dateElement) => dateElement.innerHTML = hourT)
document.querySelectorAll('.full-time').forEach((dateElement) => dateElement.innerHTML = fullT)
}
setInterval(displayDate, 10);

// =========================DISPLAYING DELIVERY INFORMATION==================================

function openInfo() {
    var info = document.getElementById("showInfo");

    info.classList.add("open-info");
}
function closeInfo() {
    var info = document.getElementById("showInfo");

    info.classList.remove("open-info");
}

// ======================DISPLAYING UPDATED CART===========================

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
    };
}

// ====================FUNCTION TO SEARCH THE SEARCH INPUT BOX==========================
    const menu =[
        {title: 'Seafood'},
        {title: 'Rice'},
        {title: 'Fufu'},
        {title: 'Corn'},
        {title: 'Beans'},
        {title: 'Africa salad'},
        {title: 'Agbogbo'},
        {title: 'Tuwo'},
        {title: 'Amala'},
        {title: 'Iyan'},
        {title: 'Beef'}
    ];

    const list = document.getElementById('list');

    function setList(group){
        clearList();
        for (const food of group) {
            const item = document.createElement('li');
            item.classList.add('list-group-item');
            const text = document.createTextNode(food.title);
            item.appendChild(text);
            list.appendChild(item);
        }
        if (group.length === 0) {
            setNoResults();
        }
    }

    function clearList() {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }

    function setNoResults(){
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(food.title);
        item.appendChild(text);
        list.appendChild(item);
    }

    function getRelevancy(value, searchTerm) {
        if (value === searchTerm) {
            return 2;
        } else if (value.startsWith(searchTerm)) {
            return 1;
        }else if (value.includes(searchTerm)) {
            return 0;
        }else{
            return -1;
        }
    }

    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', (event) => {
        let value = event.target.value;
        if (value && value.trim().length > 0){
            value = value.trim().toLowerCase();
            setList(menu.filter(food => {
                return food.title.includes(value);
            }).sort((foodA, foodB) => {
                return getRelevancy(foodB.title, value) - getRelevancy(foodA.title, value);
            }));
        }else{
            clearList();
        }
    });


// =====================FUNCTION TO OPEN AND CLOSE PAYMENT CHANNEL=======================
function openPay() {
    var paymentD = document.getElementById("payD");

    paymentD.classList.add("open-pay");
}
function closePay() {
    var paymentD = document.getElementById("payD");

    paymentD.classList.remove("open-pay");
}

// ================FUNCTION TO OPEN AND CLOSE PAYMENT STATUS FOR BOTH SUCCESSFUL AND DECLINED=====
function showS() {
    var statusSuc = document.getElementById("statB");

    statusSuc.classList.add("open-status");
}
function hideS() {
    var statusSuc = document.getElementById("statB");

    statusSuc.classList.remove("open-status");
}

// DECLINED POP-UP
function showD() {
    var statusDec = document.getElementById("statB2");

    statusDec.classList.add("open-status");
}
function hideD() {
    var statusDec = document.getElementById("statB2");

    statusDec.classList.remove("open-status");
}

// =======FUNCTION TO DELETE ITEMS FROM FAVOURITE LIST AND ALSO ADD ITEMS TO CART===========

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', green)
} else {
    green()
}

function green() {
    var removeFavItemButtons = document.getElementsByClassName('fav-del')
    for (var i = 0; i < removeFavItemButtons.length; i++) {
        var button = removeFavItemButtons[i]
        button.addEventListener('click', removeFavItem)
    }

    var addToFavButtons = document.getElementsByClassName('fav-item-but')
    for (var i = 0; i < addToFavButtons.length; i++) {
        var button = addToFavButtons[i]
        button.addEventListener('click', addToFavClicked)
    }
}

function removeFavItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    console.log(buttonClicked);
}

function addToFavClicked(event) {
    var button = event.target
    var favItem = button.parentElement.parentElement.parentElement.parentElement
    var tit = favItem.getElementsByClassName('fav-title')[0].innerText
    var pri = favItem.getElementsByClassName('fav-price')[0].innerText
    var imgSrc = favItem.getElementsByClassName('fav-image')[0].src
    addItemToFav(tit, pri, imgSrc)
    updateCartTotal()
}

function addItemToFav(tit, pri, imgSrc) {
    var fav2Row = document.createElement('div')
    fav2Row.classList.add('fav2-row')
    var favItems = document.getElementsByClassName('fav-items')[0]
    var favItemNames = favItems.getElementsByClassName('fav-row_title')
    for (var i = 0; i < favItemNames.length; i++) {
        if (favItemNames[i].innerText == tit) {
            alert('This item has already been added to your favourite list')
            return
        }
    }
    var favRowContents = `<article class="fav-row">
    <div>
        <img class="fav-row_img" src="${imgSrc}" alt="${tit}" />
    </div>
    <div>
        <h4 class="fav-row_title">${tit}</h4>
    </div>
    <div >
        <span class="fav-row_price">${pri}</span>
    </div>
    <div class="fav-row_icons">
        <a href="#" title="shopping cart"><i class="btn btn-primary shop-item-button fas fa-shopping-cart" onclick="showBadge()"></i></a>
        <a href="#" title="delete"><i class="fav-del fas fa-trash-alt"></i></a>
    </div>
</article>`

    fav2Row.innerHTML = favRowContents
    favItems.append(fav2Row)
    fav2Row.getElementsByClassName('fav-del')[0].addEventListener('click', removeFavItem)
}

// ===================================FUNCTION TO DISPLAY TRACK ORDER=========================================

function showTrack() {
    var orderT = document.getElementById("trackO");

    orderT.classList.add("show-track");
}
function hideTrack() {
    var orderT = document.getElementById("trackO");

    orderT.classList.remove("show-track");
}

// ==================FUNCTION TO MAKE STAR ELEMENTS CLICKABLE AND ALSO REVEAL THEM==========

const allStars = document.querySelectorAll('.star');
let current_rating = document.querySelector('.current_rating');

allStars.forEach((star, i) => {
    star.onclick = function () { 
        let current_star_level = i + 1;
        current_rating.innerText = `${current_star_level} of 5`;

        allStars.forEach((star, j) => {
            if(current_star_level >= j + 1) {
                star.innerHTML = '&#9733;';
            } else {
                star.innerHTML = '&#9734;';
            }
        })
    }
});

// REVEALING RATING POP-UP
function showRating() {
    var rate = document.getElementById("ratings");

    rate.classList.add("open-ratings");
}
function hideRating() {
    var rate = document.getElementById("ratings");

    rate.classList.remove("open-ratings");
}

// =================SHOWING MODAL BOX FOR NOTIFICATION AND ENBLING PUSH NOTIFICATION=================

function showNotify() {
    var notification = document.getElementById("notify");

    notification.classList.add("show-notification");
}
function hideNotify() {
    var notification = document.getElementById("notify");

    notification.classList.remove("show-notification");
}

// ================FUNCTION TO DISPLAY ORDER POP-UP=========================
function showOrder() {
    var order = document.getElementById("popOrd");

    order.classList.add("reveal-order");
}
function hideOrder() {
    var order = document.getElementById("popOrd");

    order.classList.remove("reveal-order");
}

// ================FUNCTION TO UPLOAD IMAGE=============================
const image_input = document.querySelector('#picup');
// console.log(image_input);
var uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    // console.log(reader);
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        // console.log(uploaded_image);
        document.querySelector("#displayPhoto").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})


// ===========SETTING TIMING FOR TRACK POP-UP DISPLAY================
function timeMole(){
    function myIntervalFunction() {
        let first = document.getElementById('div1').style.visibility="visible";
        let second = document.getElementById('div2').style.visibility="hidden";
        let third = document.getElementById('div3').style.visibility="hidden";
        let fourth = document.getElementById('div4').style.visibility="hidden";
        
        setInterval(function () {
            second = document.getElementById('div2').style.visibility="visible";
        },180000);

        setInterval(function () {
            third = document.getElementById('div3').style.visibility="visible";
        },300000);

        setInterval(function () {
            fourth = document.getElementById('div4').style.visibility="visible";
        },590000);

        setInterval(function () {
            document.getElementById('prev-del').style.zIndex="0";
            document.getElementById('trackO').classList.remove("show-track");
        },600000);

    };

    var myInterval = setInterval(myIntervalFunction, 10);

    function myTimeoutFunction() {
    clearInterval(myInterval);
}

var myTimeout = setTimeout(myTimeoutFunction, 2000);

};

// ===========TO REVEAL HIDDEN RECORDS WITH INFO FOR ORDER/TRACK HISTORY================

function revealHistory(){
    var emptyHistory = document.getElementById('emptyHistory');
    var infoHistory = document.getElementById('infoHistory');

    emptyHistory.classList.add("info-empty-history");
    infoHistory.classList.add("info-empty-track");
}

function revealTrack(){
    var emptyTrack = document.getElementById('emptyTrack');
    var infoTrack = document.getElementById('infoTrack');

    emptyTrack.classList.add("info-empty-history");
    infoTrack.classList.add("info-empty-track");
}

// =======FUNCTION TO DISPLAY FORGOT PASSWORD MODAL BOX=================
function showForgotPass(){
    var forgotPassword = document.getElementById('forgotPass');

    forgotPassword.classList.add("show-forgot-pass");
}

function hideForgotPas(){
    var forgotPassword = document.getElementById('forgotPass');

    forgotPassword.classList.remove("show-forgot-pass");
}

