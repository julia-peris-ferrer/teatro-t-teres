import $ from './jquery-3.3.1.min';

$(".background").on('click', function() {
    $(this).css({display:"none"});
    $(".menu").removeClass("shown");
});

$("#menu-button").on("click", function(){
    $(".background").css({display:"block"});
    $(".menu").addClass("shown");
});