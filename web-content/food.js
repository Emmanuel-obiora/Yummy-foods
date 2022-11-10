// ================FECTHING DATA FOR FOOD MENU========================

// =======CONTINENTAL DISH CATEGORY==============
fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data1 = "";
    completedata.map((values) => {
        data1+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.image} alt=${values.title}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.title}</h3>
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
    console.log(err);
})

// ============DESERTS ======================
fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data2 = "";
    completedata.map((values) => {
        data2+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.image} alt=${values.title}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.title}</h3>
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
    console.log(err);
})

// =============MEATS AND GRILLS======================

fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data3 = "";
    completedata.map((values) => {
        data3+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.image} alt=${values.title}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.title}</h3>
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
    console.log(err);
})

// ================NATIVE DELICACIES=======================

fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data4 = "";
    completedata.map((values) => {
        data4+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.image} alt=${values.title}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.title}</h3>
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
    console.log(err);
})

// ===================PATERIES==============================
fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data5 = "";
    completedata.map((values) => {
        data5+= `<article class = "menu_list shop-item">
        <div class="menu_list-image">
            <img class="shop-item-image fav-image" src=${values.image} alt=${values.title}>
        </div>
        <div class="menu_list-summary">
            <div class="menu_list-summary-about">
                <h3 class="shop-item-title fav-title">${values.title}</h3>
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
    console.log(err);
})