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



// =======FUNCTION TO DELETE ITEMS FROM FAVOURITE LIST AND ALSO ADD ITEMS TO CART===========

// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', green)
// } else {
//     green()
// }

// function green() {
//     var removeFavItemButtons = document.getElementsByClassName('fav-del')
//     for (var i = 0; i < removeFavItemButtons.length; i++) {
//         var button = removeFavItemButtons[i]
//         button.addEventListener('click', removeFavItem)
//     }

//     var addToFavButtons = document.getElementsByClassName('fav-item-but')
//     for (var i = 0; i < addToFavButtons.length; i++) {
//         var button = addToFavButtons[i]
//         button.addEventListener('click', addToFavClicked)
//     }
// }

// function removeFavItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.parentElement.remove()
//     console.log(buttonClicked);
// }

// function addToFavClicked(event) {
//     var button = event.target
//     var favItem = button.parentElement.parentElement.parentElement.parentElement
//     var tit = favItem.getElementsByClassName('fav-title')[0].innerText
//     var pri = favItem.getElementsByClassName('fav-price')[0].innerText
//     var imgSrc = favItem.getElementsByClassName('fav-image')[0].src
//     addItemToFav(tit, pri, imgSrc)
//     updateCartTotal()
// }

// function addItemToFav(tit, pri, imgSrc) {
//     var fav2Row = document.createElement('div')
//     fav2Row.classList.add('fav2-row')
//     var favItems = document.getElementsByClassName('fav-items')[0]
//     var favItemNames = favItems.getElementsByClassName('fav-row_title')
//     for (var i = 0; i < favItemNames.length; i++) {
//         if (favItemNames[i].innerText == tit) {
//             alert('This item has already been added to your favourite list')
//             return
//         }
//     }
//     var favRowContents = `<article class="fav-row">
//     <div>
//         <img class="fav-row_img" src="${imgSrc}" alt="${tit}" />
//     </div>
//     <div>
//         <h4 class="fav-row_title">${tit}</h4>
//     </div>
//     <div >
//         <span class="fav-row_price">${pri}</span>
//     </div>
//     <div class="fav-row_icons">
//         <a href="#" title="shopping cart"><i class="btn btn-primary shop-item-button fas fa-shopping-cart" onclick="showBadge()"></i></a>
//         <a href="#" title="delete"><i class="fav-del fas fa-trash-alt"></i></a>
//     </div>
// </article>`

//     fav2Row.innerHTML = favRowContents
//     favItems.append(fav2Row)
//     fav2Row.getElementsByClassName('fav-del')[0].addEventListener('click', removeFavItem)
// }