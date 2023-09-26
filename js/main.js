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

$(document).ready(function(){
    $('.slider-1__items').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        initialSlide: 0        
    });
});

$(document).ready(function(){
    $('.slider-2__items').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        initialSlide: 0        
    });
});

$(document).ready(function(){
    $('.coaches__items').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        initialSlide: 0        
    });
});
