// ================FECTHING DATA FOR FOOD MENU========================
let storeData = JSON.parse(localStorage.getItem('userId'));
// console.log(storeData);

// =======CONTINENTAL DISH CATEGORY==============
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/foods').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata);
    let data1 = "";
    completedata.map((values) => {
        data1+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.foodImage} alt=${values.name}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.name}</h3>
                <span class="shop-item-price fav-price"><b>${values.price}</b></span>
            </div>
            <div class="menu_list-summary-icons shop-item-details">
                <span><i class=" fav-item-but fas fa-heart"></i></span>
                <span class="btn btn-primary shop-item-button" type="button" title="Add to Cart"><i class="fas fa-shopping-cart" onclick="showBadge()"></i></span>
            </div>
        </div>
    </article>`
    });
    document.getElementById("continental").innerHTML=data1;

}).catch((err) =>{
    // console.log(err);
});

// ============DESERTS ======================
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/foods?category=Desserts').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data2 = "";
    completedata.map((values) => {
        data2+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.foodImage} alt=${values.name}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.name}</h3>
                <span class="shop-item-price fav-price"><b>${values.price}</b></span>
            </div>
            <div class="menu_list-summary-icons shop-item-details">
                <span><i class=" fav-item-but fas fa-heart"></i></span>
                <span class="btn btn-primary shop-item-button" type="button" title="Add to Cart"><i class="fas fa-shopping-cart" onclick="showBadge()"></i></span>
            </div>
        </div>
    </article>`
    });
    document.getElementById("desert").innerHTML=data2;

}).catch((err) =>{
    // console.log(err);
});

// =============MEATS AND GRILLS======================

fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/foods?category=Meats and Grills').then((data) => {
    // console.log(data);
    return data.json();
}).then((meatdata) => {
    // console.log(meatdata);
    let data3 = "";
    meatdata.map((values) => {
        data3+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.foodImage} alt=${values.name}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.name}</h3>
                <span class="shop-item-price fav-price"><b>${values.price}</b></span>
            </div>
            <div class="menu_list-summary-icons shop-item-details">
                <span><i class=" fav-item-but fas fa-heart"></i></span>
                <span class="btn btn-primary shop-item-button" type="button" title="Add to Cart"><i class="fas fa-shopping-cart" onclick="showBadge()"></i></span>
            </div>
        </div>
    </article>`
    });
    document.getElementById("meatGrills").innerHTML=data3;

}).catch((err) =>{
    // console.log(err);
});

// ================NATIVE DELICACIES=======================

fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/foods?category=Native Delicacies').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data4 = "";
    completedata.map((values) => {
        data4+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.foodImage} alt=${values.name}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.name}</h3>
                <span class="shop-item-price fav-price"><b>${values.price}</b></span>
            </div>
            <div class="menu_list-summary-icons shop-item-details">
                <span><i class=" fav-item-but fas fa-heart"></i></span>
                <span class="btn btn-primary shop-item-button" type="button" title="Add to Cart"><i class="fas fa-shopping-cart" onclick="showBadge()"></i></span>
            </div>
        </div>
    </article>`
    });
    document.getElementById("natives").innerHTML=data4;

}).catch((err) =>{
    // console.log(err);
});

// ===================PATERIES==============================
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/foods?category=continental').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data5 = "";
    completedata.map((values) => {
        data5+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.foodImage} alt=${values.name}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.name}</h3>
                <span class="shop-item-price fav-price"><b>${values.price}</b></span>
            </div>
            <div class="menu_list-summary-icons shop-item-details">
                <span><i class=" fav-item-but fas fa-heart"></i></span>
                <span class="btn btn-primary shop-item-button" type="button" title="Add to Cart"><i class="fas fa-shopping-cart" onclick="showBadge()"></i></span>
            </div>
        </div>
    </article>`
    });
    document.getElementById("pateries").innerHTML=data5;

}).catch((err) =>{
    // console.log(err);
});

// ===================DRINKS==========================
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/foods?category=Drinks').then((data) => {
    // console.log(data);
    return data.json();
}).then((drinksorder) => {
    // console.log(drinksorder);
    let data6 = "";
    drinksorder.map((data) => {
        console.log(data);
        data6+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${drinksorder.foodImage} alt=${data.name}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.name}</h3>
                <span class="shop-item-price fav-price"><b>${values.price}</b></span>
            </div>
            <div class="menu_list-summary-icons shop-item-details">
                <span class="fav-item-but"><i class="fas fa-heart"></i></span>
                <span class="btn btn-primary shop-item-button" type="button" title="Add to Cart"><i class="fas fa-shopping-cart" onclick="showBadge()"></i></span>
            </div>
        </div>
    </article>`
    });
    document.getElementById("drinks").innerHTML=data6;

}).catch((err) =>{
    // console.log(err);
});

// ================== FETCHING DATA FOR ORDER HISTORY ==========================
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/order-histories/').then((data) => {
    // console.log(data);
    return data.json();
}).then((orderHis) => {
    // console.log(completedata[2].title);
    let order = "";
    orderHis.map((values) => {
        order+= `<a title="View order" onClick="showOrder()">
        <article class="order-ani orders-record">
            <span class="time-guide">${values.id}</span>
            <span>${values.name}</span>
            <span>${values.price}</span>
        </article>
    </a>`
    });
    document.getElementById("orderHistory").innerHTML=order;

}).catch((err) =>{
    // console.log(err);
}); 

//=============FETCHING ORDER TO TRACK ORDER =========================
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/order-histories/one').then((data) => {
    // console.log(data);
    return data.json();
}).then((trackHis) => {
    // console.log(completedata[2].title);
    let track = "";
    trackHis.map((values) => {
        track+= `<article class="orders-record">
        <span class="time-guide">${values.time}</span>
        <span>${values.name}</span>
        <span>${values.price}</span>
        <div class="order-icon hour-dis">
            <i class="hour-t fas fa-check" onclick="showTrack()"></i>
            <i class="timer fas fa-hourglass-end" id="prev-del" onclick="showTrack(); timeMole()"></i>
        </div>
    </article>`
    });
    document.getElementById("trackOrders").innerHTML=order;

}).catch((err) =>{
    // console.log(err);
});

// ============FAVOURITE FOOD ITEMS============================
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/favorites').then((data) => {
    // console.log(data);
    return data.json();
}).then((favList) => {
    // console.log(completedata[2].title);
    let favourite = "";
    favList.map((values) => {
        favourite+= `<article class="fav-row">
        <div>
            <img class="fav-row_img" src=${values.foodImage} />
        </div>
        <div>
            <h4 class="fav-row_title">${values.name}</h4>
        </div>
        <div >
            <span class="fav-row_price">${values.price}</span>
        </div>
        <div class="fav-row_icons">
            <a href="#" title="shopping cart"><i class="btn btn-primary shop-item-button fas fa-shopping-cart" onclick="showBadge()"></i></a>
            <a href="#" title="delete"><i class="fav-del fas fa-trash-alt"></i></a>
        </div>
    </article>`
    });
    document.getElementById("favourites").innerHTML=order;

}).catch((err) =>{
    // console.log(err);
});


// ================FETCHING DATA FOR USERS PROFILE============================
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/favorites').then((data) => {
    // console.log(data);
    return data.json();
}).then((userProfile) => {
    // console.log(completedata[2].title);
    let profile = "";
    userProfile.map((values) => {
        profile+= `<article>
        <div class="profile-container_bottom-m">
            <div class="profile-container_bottom-m-img">
                <div id="displayPhoto" class="img-preview"></div>
                <label for="picup" class="pics-adjust"><i class="fas fa-camera"></i></label>
                <input title="Upload photo" id="picup" type="file" class="my-file" value=${values.image} accepts="image/png, image/jpg">
                <p>Only <b>jpg</b> and <b>png</b> format are allowed</p>
            </div>
            <div class="profile-container_bottom-m-details">
                <div class="profile-input">
                    <i class="fas fa-regular fa-id-card-clip"></i>
                    <input type="text" placeholder="  Name" autofocus title="Full Name" value=${values.fullname} id="fullName"/>
                </div>
                <div class="profile-input">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="text" placeholder="  Email Address" autofocus value=${values.email} title="Email" id="pEmail"/>
                </div>
                <div class="profile-input">
                    <i class="fas fa-regular fa-phone"></i>
                    <input type="text" placeholder="  Phone Number" autofocus value=${values.phone} title="Phone" id="phone"/>
                </div>
                <div class="profile-input">
                    <i class="fas fa-map-marker-alt"></i>
                    <input type="text" placeholder="  Address" autofocus value=${values.address} title="Address" id='address'/>
                </div>
            </div>
        </div>
        <div class="profile-container_bottom-bottom">
            <button type="submit" value="Add" title="Update profile">Save</button>
            <button type="button" value="Remove" title="Log-out" class="log-out" onclick="logOut()"> Logout </button>
        </div>
    </article>`
    });
    document.getElementById("userPro").innerHTML=order;

}).catch((err) =>{
    // console.log(err);
});


// ==================FETCHING DATA FOR USER'S CART==========================
fetch('https://food-delivery-app-lab3.herokuapp.com/api/v1/carts'+storeData).then((data) => {
    // console.log(data);
    return data.json();
}).then((cartContainer) => {
    // console.log(completedata[2].title);
    let usercart = "";
    cartContainer.map((values) => {
        usercart+= `<article class = "cart-item cart-column menu_list">
        <div class="image">
            <img  class="cart-item-image" src="${values.imageSrc}" alt="${values.title}" >
        </div>
        <h3 class="cart-item-title">${values.title}</h3>
        <div class="item-adder">
        <button type="button" title="reduce" class="minus-d">-</button>
        <input class="num-d cart-quantity-input" type="number" title="item-number" value=${values.quantity}></input>
        <button type="button" title="increase" class="plus-d">+</button>
        </div>
        <span class="amf cart-price cart-column">${values.price}</span>
        <div class="split">
        <span><i class="fas fa-heart"></i></span>
        <span class="btn-danger"><i class="fas fa-trash-alt"></i></span>
        </div>
    </article>`
    });
    document.getElementById("userCart").innerHTML=order;

}).catch((err) =>{
    // console.log(err);
});