$(document).ready(function(){

    $("#base-box-1").mouseenter(function(){
        animateFromTop("#base-box-1", "50");
    });

    $("#base-box-2").mouseenter(function(){
        animateFromTop("#base-box-2", "50");
    });

    $("#base-box-3").mouseenter(function(){
        animateFromTop("#base-box-3", "50");
    });

    $("#base-box-1").mouseleave(function(){
        animateFromTop("#base-box-1", "-50");
    });

    $("#base-box-2").mouseleave(function(){
        animateFromTop("#base-box-2", "-50");
    });

    $("#base-box-3").mouseleave(function(){
        animateFromTop("#base-box-3", "-50");
    });
    
})

function animateFromTop(content, amount){
    $(content).animate({height: amount});
}