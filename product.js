var linkSrt = window.location.href
var productId = linkSrt.split('=')

var cartCount = 0
var tempCount = 0

var productList = [];

$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + productId[1], function(data){

var spCount = 0
    
    var imageContainer = document.createElement('div')
    imageContainer.id = 'photosContainer'

    for(var len=0 ; len<data.photos.length ; len++) {
        var imageTag = document.createElement('img')
        imageTag.id = "img" + len
        imageTag.className = 'defaultBorderColor'
        imageTag.src = data.photos[len]

        imageContainer.appendChild(imageTag)

    }

    $('#product-wrapper').append($('<div>').attr('id', 'left-part')
    .append($('<img>').attr({id: 'product-preview', src: data.preview}))
    )

    $('#product-wrapper').append($('<div>').attr('id', 'right-part').addClass('right-part')
    .append($('<h1>').attr('id', 'pName').text(data.name))
    .append($('<h4>').attr('id', 'pBrand').text(data.brand))
    .append($('<h3>').attr('id', 'pPrice').text('Price: Rs ').append($('<span>').text(data.price)))
    .append($('<div>').attr('id', 'pDescription')
    .append($('<h3>').text('Description'))
    .append($('<p>').text(data.description)))
    .append($('<div>').attr('id', 'pPreviewThumbnails')
    .append($('<h3>').text('Product Preview'))
    .append(imageContainer))
    .append($('<div>').attr('id', 'btn')
    .append($('<button>').attr('id', 'addToCart').text('Add to Cart')))
    )

    $('#img0').css('border', '2px solid #009688')

    $('#photosContainer img').click(function() {
        var cardId = this.id
        console.log(this.src)
        for(var i=0 ; i<$('#photosContainer img').length ; i++) {
            if(i == cardId[3]) {
                $('#img' + i).css('border', '2px solid #009688')
                $('#product-preview').attr('src', this.src)
            } else {
                if(localStorage.getItem('theme') == 'true') {
                    $('#img' + i).css('border', '2px solid #494949')
                } else {
                    $('#img' + i).css('border', '2px solid #ffffff')
                }
            }
        }
    });

    // console.log(cartCount)

    // localStorage.setItem('cart-count', JSON.stringify(cartCount))

    if(localStorage.getItem('cart-count')) {
        $('#cart-count').text(JSON.parse(localStorage.getItem('cart-count'))) //Cart Count Area
    } else {
        $('#cart-count').text(0)
    }


    $('#addToCart').click(function() {
        
        // console.log(JSON.parse(localStorage.getItem('product-list')))
        
        if(JSON.parse(localStorage.getItem('product-list')) != null){
            productList = JSON.parse(localStorage.getItem('product-list'))
            console.log("list updated")
        }

        if(tempCount == 0) {
            tempCount = JSON.parse(localStorage.getItem('cart-count'))
        }

        tempCount++
        console.log(tempCount)

        localStorage.setItem('cart-count', JSON.stringify(tempCount))
        
        $('#cart-count').text(JSON.parse(localStorage.getItem('cart-count')))

        cartCount = tempCount
        spCount++;

        var mObj = {}
        var flag = 1

        if(productList.length) {
            for(var i=0 ; i<productList.length ; i++) {
                if(productList[i].id == data.id) {
                    productList[i].count += 1
                    flag = 0;
                }
            }
            if(flag) {
                console.log('in array but not id')
                mObj = {
                    id: data.id,
                    count: spCount
                }
                productList.push(mObj)
                flag = 0
            }

        } else {
            console.log('false')
            mObj = {
                id: data.id,
                count: spCount
            }
            productList.push(mObj)
        }

         localStorage.setItem('product-list', JSON.stringify(productList))
 
    });

    // ======================= Theme Button ============================

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
    console.log('theme')

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

    //  ===================== product design =======================

    $('#right-part').toggleClass('textColorChange')

    $('#photosContainer img').toggleClass('borderColor')

}

// var themeFlag = 1
$('#theme-btn').click(function(){
    changeTheme();

    // ======= local storage =======
    var themeVar = $('#theme-btn').hasClass('change-theme') ? true : false
    localStorage.setItem('theme', themeVar)
});

});

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

