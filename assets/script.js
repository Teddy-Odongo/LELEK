$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() <= 40){
            $('.navbar').removeClass('scroll_navbar')
        }else{
            $('.navbar').Class('scroll_navbar')
        }
    })
})