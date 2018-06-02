//Cuando haces click en el botón de cerrar, cierra el anuncio de subscripción.


import $ from './jquery-3.3.1.min';

$(".close").on("click", function(){
    $(".advertisement").remove();
});
