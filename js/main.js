$(document).ready(function(){
    $('.burger-menu').click(function() {
        $('.burger-menu').toggleClass('open-menu');
        $('.intro__menu').toggleClass('open-menu');
    });    
});

$(document).ready(function(){    
    $('.footer_burger').click(function() {        
        $('.footer_burger').toggleClass('open-menu');
        $('.footer__menu').toggleClass('open-menu');        
    }); 
});

$( init );

function init() {

 // Перемещаем параграф из #myDiv1 в #myDiv2

  $('#nets').append( $('#myDiv1>p') );

}
