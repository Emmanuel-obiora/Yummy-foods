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
    else if(localEmail != null){
        alert(`${localEmail} is signed in, logout the user`);
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
            localStorage.setItem('userId', JSON.stringify(data.data.user._id));
            localStorage.setItem('email', JSON.stringify(data.data.user.email));
            setCookie("jwt",data.token, 5);
            console.log(data);
        }).catch(error => console.error('Error:', error)); 
    } 
    });
    // ===========LOG-OUT A USER==================
    function logOut(){
        var id = JSON.parse(localStorage.getItem('userId'));

        if(id == "" || id == null){
            alert('You are currently not logged in');
        } else {
        deleteCookie('token');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
        alert('You have been logged out');
        window.location.href=('index.html');
        }

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
            localStorage.setItem('userId', JSON.stringify(data.data.user._id));
            localStorage.setItem('email', JSON.stringify(data.data.user.email));
            setCookie("jwt",data.token, 5);
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

// ==============================Reveal Passwords for signin/signup=================================
var state = false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("signUpPassword").setAttribute("type", "password");
        document.getElementById("eye").style.color="#7a797e";
        document.getElementById("eye2").style.color="#7a797e";
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("signUpPassword").setAttribute("type", "text");
        document.getElementById("eye").style.color="#5887ef";
        document.getElementById("eye2").style.color="#5887ef";
        state = true;
    }
}

var check = false;
function tog(){
    if(check){
        document.getElementById("confirmPass").setAttribute("type", "password");
        document.getElementById("iron").style.color="#7a797e";
        check = false;
    }
    else {
        document.getElementById("confirmPass").setAttribute("type", "text");
        document.getElementById("iron").style.color="#5887ef";
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

// ==================FUNCTION TO OPEN RESET LINK ON EMAIL CONFIRMATION========================
function openResetLink(){
    var passwordReset = document.getElementById('passwordReset');

    passwordReset.classList.add("open-reset");
}

function closeResetLink(){
    var passwordReset = document.getElementById('passwordReset');

    passwordReset.classList.remove("open-reset");
}

// ======FUNCTION TO STORE AND DELETE COOKIES STORAGE TO THIS WEBSITE========

// =======SETTING THE COOKIE====
function setCookie(name,value,exp_days) {
    var d = new Date();
    d.setTime(d.getTime() + (exp_days*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
// ======DELETING THE COOKIE====
function deleteCookie(name) {
    var d = new Date();
    d.setTime(d.getTime() - (60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=;" + expires + ";path=/";
}
// =====GETTING ITEMS FROM COOKIES=====
function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0){
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// ================revealing passwords on password reset page===============
var reset = false;
function togReset(){
    if(reset){
        document.getElementById("confirmResetPass").setAttribute("type", "password");
        document.getElementById("ironRe").style.color="#7a797e";
        reset = false;
    }
    else {
        document.getElementById("confirmResetPass").setAttribute("type", "text");
        document.getElementById("ironRe").style.color="#5887ef";
        reset = true;
    }
}


var trust = false;
function toggleReset(){
    if(trust){
        document.getElementById("resetNewPassword").setAttribute("type", "password");
        document.getElementById("eyeRe").style.color="#7a797e";
        trust = false;
    }
    else {
        document.getElementById("resetNewPassword").setAttribute("type", "text");
        document.getElementById("eyeRe").style.color="#5887ef";
        trust = true;
    }
}

