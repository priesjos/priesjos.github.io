$(document).ready(function(){

    $("#base-box-1").mouseenter(function(){
        animateFromTop("#base-box-1", "40");
    });

    $("#base-box-2").mouseenter(function(){
        animateFromTop("#base-box-2", "40");
    });

    $("#base-box-3").mouseenter(function(){
        animateFromTop("#base-box-3", "40");
    });

    $("#base-box-1").mouseleave(function(){
        animateFromTop("#base-box-1", "-0");
    });

    $("#base-box-2").mouseleave(function(){
        animateFromTop("#base-box-2", "-0");
    });

    $("#base-box-3").mouseleave(function(){
        animateFromTop("#base-box-3", "-0");
    });
    
})

function animateFromTop(content, amount){
    $(content).animate({top: amount});
}