$(function(){

    //lang menu
    $(".select_language").click(function(){
        $(this).toggleClass("show");
    })

    //menu
    $(".sub").hide();

    $(".gnb_menu > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $(".gnb_menu").animate({height:"70px"},500)
    }, function(){
        $(this).find(".sub").stop().slideUp();
        $(".gnb_menu").animate({height:"50px"},500)
    })

    //img slide slick
    $(".visual_wrap").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,

    })




}) //jq