var proUser = JSON.parse(localStorage.getItem('userId'));

// if (document.readyState == 'loading') {
//         document.addEventListener('DOMContentLoaded', ready)
//     } else {
//         ready()
//     }
    

//     var cartUp = document.getElementById('userCart');
// // console.log(profile);

//     cartUp.addEventListener('submit', function(e){
//     e.preventDefault()
//     function ready() {
//     //     var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//     //     for (var i = 0; i < removeCartItemButtons.length; i++) {
//     //         var button = removeCartItemButtons[i]
//     //         button.addEventListener('click', removeCartItem)
//     //     }
    
//     //     var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//     //     for (var i = 0; i < quantityInputs.length; i++) {
//     //         var input = quantityInputs[i]
//     //         input.addEventListener('change', quantityChanged)
//     //     }
    
//         var addToCartButtons = document.getElementsByClassName('shop-item-button')
//         for (var i = 0; i < addToCartButtons.length; i++) {
//             var button = addToCartButtons[i]
//             button.addEventListener('click', addToCartClicked)
//         }
    
//         // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
//     }

//     function addToCartClicked(event) {
//             var button = event.target
//             var shopItem = button.parentElement.parentElement.parentElement.parentElement
//             var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//             var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//             var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//             addItemToCart(title, price, imageSrc)
//         }

//     const myData = JSON.parse(localStorage.getItem('userId'));

//         fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/carts'+myData, {
//     method: 'POST',
//     body: JSON.stringify({
//     name: title,
//     price: price,
//     foodImage: imageSrc

//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//        }
//        })
//        .then(res => {
//         if (res.ok) { 
//             alert("Item has been added to cart");
//             console.log("HTTP request successful") 
//         }
//         else { 
//             alert("Item was not added to cart");
//             console.log("HTTP request unsuccessful") }
//     })
//        .then(function(response){ 
//         return response.json()})
//         .then(function(data)
//         {console.log(data)})
//         .catch(error => console.error('Error:', error)); 
//        });

// ===========POSTING USER PROFILE DETAILS =========================
var profile = document.getElementById('usersProfile');
// console.log(profile);

    profile.addEventListener('submit', function(e){
    e.preventDefault()

    var fullname = document.getElementById('fullName').value
    var email =document.getElementById('pEmail').value
    var phone =document.getElementById('phone').value
    var address =document.getElementById('address').value

        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/users/'+proUser, {
    method: 'PUT',
    body: JSON.stringify({
        fullname: fullname,
        email:  email,
        phone: phone,
        address: address

    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
       }
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
       .then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)
        }).catch(error => console.error('Error:', error)); 
    });


    // =================== POSTING USER RATING =============================
    var form=document.getElementById('starRatings');
    
    form.submit( function(e){
    e.preventDefault()
    
    var number = document.getElementById('currentRating').value
    var rating = document.getElementById('review').value
    
        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/reviews', {
    method: 'POST',
    body: JSON.stringify({
    rating: number,
    review: rating
    
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
       }
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
       .then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)
        }).catch(error => console.error('Error:', error)); 
    });

    // =============UPDATING USER'S DELIVERY INFO========================
    var update=document.getElementById('userDelivery');
    
    update.addEventListener('submit', function(e){
        e.preventDefault()
    
    var deliveryPhone = document.getElementById('delivPhone').value
    var deliveryAddress = document.getElementById('delivAddress').value
    var deliveryName = document.getElementById('delivName').value
    
        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/users/'+proUser, {
    method: 'PUT',
    body: JSON.stringify({
    phone: deliveryPhone,
    address: deliveryAddress,
    fullname: deliveryName
    
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
       }
       })
       .then(res => {
        if (res.ok) { 
            alert("Your delivery information has been updated");
            closeInfo(); showUpdate();
            console.log("HTTP request successful") 
        }
        else { 
            alert("Your delivery information was not accepted");
            console.log("HTTP request unsuccessful") }
    })
       .then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)
        }).catch(error => console.error('Error:', error)); 
    });

    // ===============POSTING USER'S PAYMENT DETAILS===================
    var form=document.getElementById('payment');

    form.submit( function(e){
        e.preventDefault()
    
    var cardNumber = document.getElementById('cardNumber').value
    var expiryDate = document.getElementById('expiryDate').value
    var cvv = document.getElementById('cvv').value
    var userName = document.getElementById('userName').value
    
        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/reviews', {
    method: 'POST',
    body: JSON.stringify({
        card_number: cardNumber,
        cvv: cvv
    
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
       }
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
       .then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)
        }).catch(error => console.error('Error:', error)); 
    });

    // ==================FORGOT PASSWORD AUTHENTICATION=====================
    var recovery=document.getElementById('forgotPasswords');
    
    recovery.addEventListener('submit', function(e){
        e.preventDefault()
    
    var forgotEmail = document.getElementById('recoverMe').value
    
        fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/auths/forgot-password'+proUser, {
    method: 'PUT',
    body: JSON.stringify({
    email: forgotEmail
    
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
       }
       })
       .then(res => {
        if (res.ok) { 
            alert("Your email has been verified, please fill the reset password form below.");
            console.log("HTTP request successful") 
        }
        else { 
            alert("Email address not found");
            console.log("HTTP request unsuccessful") }
    })
       .then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)
        }).catch(error => console.error('Error:', error)); 
    });