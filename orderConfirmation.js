$(document).ready(function() {

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

// =======================================================


    $('.trigger').toggleClass('drawn')
});

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

    $('#Success').toggleClass('textColorChange')

}

// var themeFlag = 1
$('#theme-btn').click(function(){
    changeTheme();
    
    // ======= local storage =======
    var themeVar = $('#theme-btn').hasClass('change-theme') ? true : false
    localStorage.setItem('theme', themeVar)
});