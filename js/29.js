$(function(){
    $(".con").on("mouseenter", function(){
        vid = $(this).find("video").get(0);
        vid.play();
        $(this).stop().animate({width:"35%"});
        $(this).children("h2").stop().animate({left:"100%"});
        $(this).children(".con_inner").stop().animate({left:"40px"},600);
        $(this).children("p").stop().animate({right:"20px"},1000);
        $(this).children("video").stop().animate({opacity:"1"},1000);
    })
    $(".con").on("mouseleave", function(){
        vid.pause();
        $(this).stop().animate({width:"15%"});
        $(this).children("h2").stop().animate({left:"20px"});
        $(this).children(".con_inner").stop().animate({left:"300%"},600);
        $(this).children("p").stop().animate({right:"-500%"});
        $(this).children("video").stop().animate({opacity:"0"},1000);
    })
})
