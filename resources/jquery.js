$(document).ready(function(){

    $("#base-box-1").mouseenter(function(){
        animateFromTop("#base-box-1");
    });

    $("#base-box-2").mouseenter(function(){
        animateFromTop("#base-box-2");
    });

    $("#base-box-3").mouseenter(function(){
        animateFromTop("#base-box-3");
    });

    
})

function animateFromTop(content){
    $(content).animate({marginTop: "50"});
}