var proUser = JSON.parse(localStorage.getItem('userId'));
// console.log(proUser);
// ===========POSTING USER PROFILE DETAILS =========================
function profileUpdater(){    

    var fullname = document.getElementById('fullName').value
    var email =document.getElementById('pEmail').value
    var phone =document.getElementById('phone').value
    var address =document.getElementById('address').value
    var imageSrc = document.getElementById('picup').src

    fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/users/636128b01dfbdd7fc95cfc12', {
    method: "PATCH",
    headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { 
                userId: proUser,
                fullName: fullname,
                email:  email,
                phoneNumber: phone,
                address: address,
                profileImage: imageSrc
            }
        )
    })
       .then(res => {
        if (res.ok) { 
            alert('Profile Update successful');
            console.log("HTTP request successful") }
        else { 
            alert('Your profile was not updated');
            console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

    // =================== POSTING USER RATING =============================
    function userStarRatings(){
    
    var number = document.getElementById('currentRating').value
    var rating = document.getElementById('review').value
    
    fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/reviews', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(
            { 
                rating: number,
                review: rating
            }
        )
    })
       .then(res => {
        if (res.ok) { 
            alert("Thank you for rating our product");
            console.log("HTTP request successful") 
        }
        else { 
            alert("Rating was not sent");
            console.log("HTTP request unsuccessful") }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

    // =============UPDATING USER'S DELIVERY INFO========================
    function userDeliveryUpdate(){

        var deliveryPhone = document.getElementById('delivPhone').value
        var deliveryAddress = document.getElementById('delivAddress').value
        var deliveryName = document.getElementById('delivName').value

        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/users/', {
        method: "PATCH", 
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                phone: deliveryPhone,
                address: deliveryAddress,
                fullname: deliveryName
            }
        )
    })
    .then(res => {
        if (res.ok) { 
            alert("Your delivery information has been updated");
            closeInfo(); showUpdate();
            console.log("HTTP request successful") }
        else { 
            alert("Your delivery information was not accepted");
            console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    }

    // ===============POSTING USER'S PAYMENT DETAILS===================
    function makePayment(){
    
    var cardNumber = document.getElementById('cardNumber').value
    var expiryDate = document.getElementById('expiryDate').value
    var cvv = document.getElementById('cvv').value
    var userName = document.getElementById('userName').value
    
    fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/orders/checkout', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(
            { 
                card_number: cardNumber,
                cvv: cvv,
                fullname: userName
        }
        )
    })
       .then(res => {
        if (res.ok) { 
            showS();
            window.location.href=('track-order.html');
            console.log("HTTP request successful") 
        }
        else { 
            showD();
            console.log("HTTP request unsuccessful") }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    }
    // ==================FORGOT PASSWORD AUTHENTICATION=====================
    function passwordResets(){

    var forgotEmail = document.getElementById('recoverMe').value
    
    fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/auths/forgot-password', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                { 
                    userId: proUser,
                    email: forgotEmail}
            )
        })
        .then(res => {
            if (res.ok) { 
                alert('Please check your email to complete your Password Reset');
                hideForgotPas();
                window.location.href=('index.html');
                console.log("HTTP request successful") }
            else { 
                alert('Email address not found');
                console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

//===============FUNCTION TO ADD ITEMS TO CART=========================
function addToCart(){

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    function addToCartClicked(event) {
        var button = event.target
        var shopItem = button.parentElement.parentElement.parentElement.parentElement
        var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src

    fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/carts', {
    method: "POST", 
    headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(
            { 
                name: title,
                price: price,
                foodImage: imageSrc
        }
        )
    })
    .then(res => {
        if (res.ok) { 
            alert('Item added to cart');
            console.log("HTTP request successful") }
        else { 
            alert('Unable to add item to cart')
            console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
}

// ====================FUNCTION TO ADD FAVOURITE ITEMS=============================
function addToFavouriteList(){

    var addToFavButtons = document.getElementsByClassName('fav-item-but')
    for (var i = 0; i < addToFavButtons.length; i++) {
        var button = addToFavButtons[i]
        button.addEventListener('click', addToFavClicked)
    }

    function addToFavClicked(event) {
        var button = event.target
        var favItem = button.parentElement.parentElement.parentElement.parentElement
        var tit = favItem.getElementsByClassName('fav-title')[0].innerText
        var pri = favItem.getElementsByClassName('fav-price')[0].innerText
        var imgSrc = favItem.getElementsByClassName('fav-image')[0].src
        
        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/favorites', {
    method: "POST", 
    headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(
            { 
                name: tit,
                price: pri,
                foodImage: imgSrc
        }
        )
    })
    .then(res => {
        if (res.ok) { 
            alert('Item added to favourites');
            console.log("HTTP request successful") }
        else { 
            alert('Unable to add item to favourites')
            console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    }
}

// ==================FUNCTION RESETTING PASSWORD=====================
function enterNewPasswords(){

    var resetPass = document.getElementById('resetPassword').value
    var resetConfPass = document.getElementById('confirmResetPass').value
    
    fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/auths/reset-password/b635ed15ce23b00c0309a4825da796d115f45819d2f6749e249e7108c105789d', {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(
                { 
                    userId: proUser,
                    password: resetPass,
                    confirmPassword: resetConfPass
                }
            )
        })
        .then(res => {
            if (res.ok) { 
                alert('Password accepted, please sign-in');
                window.location.href = ("/index.html");
                console.log("HTTP request successful") }
            else { 
                alert('Something went wrong, please try again');
                console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

// ==================FUNCTION TO DELETE ITEMS IN CART===========================
function deleteItemFromCart() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    function removeCartItem(event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
        }

        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/carts/6363f157575c259262deffff', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    },
    })
    .then(res => {
        if (res.ok) { console.log("DELETE request successful") }
        else { console.log("DELETE request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

// ===============FUNCTION TO REMOVE ITEMS FROM FAVOURITE LIST============================
function deleteFavourites(){

    var removeFavItemButtons = document.getElementsByClassName('fav-del')
    for (var i = 0; i < removeFavItemButtons.length; i++) {
        var button = removeFavItemButtons[i]
        button.addEventListener('click', removeFavItem)
    }

    function removeFavItem(event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
            console.log(buttonClicked);
        }

        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/favorites/63621c2d41bffad5e2b2c12d', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    },
    })
    .then(res => {
        if (res.ok) { console.log("DELETE request successful") }
        else { console.log("DELETE request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}