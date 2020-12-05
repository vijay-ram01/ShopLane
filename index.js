// ======================= slick carosel section =========================

$(function() {

    var inWrap = $('.inner-wrapper'), slide = $('.slide');
  
    function slideNext() {
  
      inWrap.animate({left: '-200%'}, 200, function() {
    
        inWrap.css('left', '-100%');
    
        $('.slide').last().after($('.slide').first());
    
      });
    }
  
  
     //auto scroll
     sliderInterval = setInterval(slideNext, 3000);
  
  });
// ======================= product listing section =========================

function createProductList(productData) {

    if(productData.isAccessory) {
        $('#AccessoriesCards')
        .append($('<div>').addClass('card')
        .append($('<a>').attr('href', './product.html?id=' + productData.id).append($('<div>').addClass('img')
        .append($('<img>').attr('src', productData.preview))
        .append($('<div>').addClass('details')
        .append($('<h3>').text(productData.name))
        .append($('<h4>').text(productData.brand))
        .append($('<h5>').text('Rs '+productData.price))
        )
        ))
        )
    } else {
        $('#clothingCards')
        .append($('<div>').addClass('card')
        .append($('<a>').attr('href', './product.html?id=' + productData.id).append($('<div>').addClass('img')
        .append($('<img>').attr('src', productData.preview))
        .append($('<div>').addClass('details')
        .append($('<h3>').text(productData.name))
        .append($('<h4>').text(productData.brand))
        .append($('<h5>').text('Rs '+productData.price))
        )
        ))
        )
    }

}

$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(data){
    for(var j=0 ; j<data.length ; j++) {
        createProductList(data[j])
    }
}).fail(function(){ alert("GET request failed!!")});

if(localStorage.getItem('cart-count')) {
    $('#cart-count').text(JSON.parse(localStorage.getItem('cart-count'))) //Cart Count Area
} else {
    $('#cart-count').text(0)
}


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
    $('#right-menu img').toggleClass('removeShadow')

    $('main').toggleClass('change')
    $('.sectionHeading').toggleClass('textColorChange')

    $('.themeBtn-container').toggleClass('containerBG')

}

// var themeFlag = 1
$('#theme-btn').click(function(){
    changeTheme();
    
    // ======= local storage =======
    var themeVar = $('#theme-btn').hasClass('change-theme') ? true : false
    localStorage.setItem('theme', themeVar)
});

// console.log(localStorage.getItem('theme'))



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
