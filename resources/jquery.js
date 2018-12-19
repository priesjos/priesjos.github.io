$(document).ready(function(){
    $("#base-box-1").mouseenter(function(){
        animateFromTop("#base-box-1", "40");
        $("#first-notVis").fadeIn();
    });

    $("#base-box-2").mouseenter(function(){
        animateFromTop("#base-box-2", "40");
        $("#second-notVis").fadeIn();
    });

    $("#base-box-3").mouseenter(function(){
        animateFromTop("#base-box-3", "40");
        $("#third-notVis").fadeIn();
    });

    $("#base-box-1").mouseleave(function(){
        animateFromTop("#base-box-1", "-0");
        $("#first-notVis").fadeOut();
    });

    $("#base-box-2").mouseleave(function(){
        animateFromTop("#base-box-2", "-0");
        $("#second-notVis").fadeOut();
    });

    $("#base-box-3").mouseleave(function(){
        animateFromTop("#base-box-3", "-0");
        $("#third-notVis").fadeOut();
    });
});



function animateFromTop(content, amount){
    $(content).animate({top: amount});
}