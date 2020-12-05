// ======================= vertical menu area ===========================

$('.hamburger').click(function(){
    $('.vertical-nav-bar').toggleClass('block')
});

$('#close-btn').click(function() {
    $('.vertical-nav-bar').toggleClass('block')
});

$('.verticalA').click(function() {
    $('.vertical-nav-bar').toggleClass('block')
});

// =================== footer area onclick =====================

$('#online-strore-wrapper').click(function() {
    console.log('footer')
    $('#online-strore-wrapper .footer-list').toggleClass('block')
});

$('#helpful-links-wrapper').click(function() {
    console.log('footer')
    $('#helpful-links-wrapper .footer-list').toggleClass('block')
});

$('#patrners-wrapper').click(function() {
    console.log('footer')
    $('#patrners-wrapper .footer-list').toggleClass('block')
});

$('#address-wrapper').click(function() {
    console.log('footer')
    $('#address-wrapper .footer-list').toggleClass('block')
});

// =====================================================================
if(JSON.parse(localStorage.getItem('product-list'))) {
    var itemsInCart = JSON.parse(localStorage.getItem('product-list'))
} else {
    var itemsInCart = []
    $('main').text('')
    $('main').append($('<p>').addClass('emptyCart').text('No Items in the cart to Checkout!'))
}

// ===================================================

// if(itemsInCart)

// =======================================================

// var itemsInCart = JSON.parse(localStorage.getItem('product-list'))
var totalAmt = 0;


$('#checkout-wrapper').append($('<h1>').text('Checkout')).append($('<h3>').attr('class', 'checkout-heading').text('Total Items: '+itemsInCart.length))
.append($('<div>')
.append($('<div>').attr('id', 'checkout-card-wrapper'))
.append($('<div>').attr('id', 'total-amt-wrapper')))

function generateCheckoutList(card, count) {
    $('#checkout-card-wrapper')
    .append($('<div>').addClass('checkout-card')
    .append($('<div>').addClass('image-container').append($('<img>').addClass('checkout-card-img').attr('src', card.preview)))
    .append($('<div>').addClass('card-details').append($('<h4>').text(card.name))
    .append($('<p>').text('x' + count))
    .append($('<p>').addClass('productPrice').text('Amount: Rs '+card.price * count))))
    
    totalAmt += (card.price * count)
}


$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(checkoutData) {
        
    for(var i=0 ; i<itemsInCart.length ; i++) {
        for(var j=0 ; j<checkoutData.length ; j++) {
            if(itemsInCart[i].id == checkoutData[j].id) {
                console.log(itemsInCart[i].count)
                generateCheckoutList(checkoutData[j], itemsInCart[i].count)
            }
        }
    }
    $('#total-amt-wrapper').append($('<h3>').addClass('checkout-heading').text('Total Amount'))
.append($('<p>').text('Amount: Rs ').append($('<span>').attr('id', 'total-amt').text(totalAmt)))
.append($('<button>').attr({id: 'place-order-btn', type:'submit', name:'placeOrder'}).text('Place Order'))

$('#place-order-btn').click(function(){
    console.log('order placed')
    window.location.href = './orderConfirmation.html'
    localStorage.removeItem('product-list');
    localStorage.removeItem('cart-count');
});

})
.fail(function() {console.log("product get failed")});

if(itemsInCart.length) {
    $('#cart-count').text(JSON.parse(localStorage.getItem('cart-count'))) //Cart Count Area
} else {
    $('#cart-count').text(itemsInCart.length) //Cart Count Area
}


// $('#cart-count').text(JSON.parse(localStorage.getItem('cart-count'))) //Cart Count Area

// ======================= Theme Button ============================
// localStorage.setItem('theme', 0)

// ===================== regret theme in smaller screen ===========================
window.onresize = function() {
    console.log($(window).width())

    if(localStorage.getItem('theme') == 'true') {
        if($(window).width() < 600) {
            localStorage.setItem('theme', false)
            changeTheme();
        }
    }
}

if(localStorage.getItem('theme') == 'true') {
    console.log('this way')
    changeTheme();
}

function changeTheme() {

    // if(themeFlag){
    //     $('#theme-btn').toggleClass('change-theme')
    //     themeFlag = 0
    // } else {
    //     $('#theme-btn').toggleClass('default-theme')
    // }
    $('#theme-btn').toggleClass('change-theme')

    $('#top-bar').toggleClass('change')
    $('#left-menu a').toggleClass('textColorChange')
    $('#cart-link i').toggleClass('textColorChange')

    $('main').toggleClass('change')
    $('.sectionHeading').toggleClass('textColorChange')

    $('.themeBtn-container').toggleClass('containerBG') //btn BG

    $('h1').toggleClass('textColorChange')
    $('h3').toggleClass('textColorChange')

}

// var themeFlag = 1
$('#theme-btn').click(function(){
    changeTheme();
    
    // ======= local storage =======
    var themeVar = $('#theme-btn').hasClass('change-theme') ? true : false
    localStorage.setItem('theme', themeVar)
});
