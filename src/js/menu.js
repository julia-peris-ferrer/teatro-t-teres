/*Para que cuando haces click en el fondo semitransparente,
 cierra el menú. Y cuando haces click en menu, despliega el menú*/

import $ from './jquery-3.3.1.min';

$(".background").on('click', function() {
    $(this).css({display:"none"});
    $(".menu").removeClass("shown");
});

$("#menu-button").on("click", function(){
    $(".background").css({display:"block"});
    $(".menu").addClass("shown");
});