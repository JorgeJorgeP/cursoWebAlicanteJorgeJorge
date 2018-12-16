$(document).ready(function(){
  //Elementos deslizantes entradas
  //Deslizante C.Asia
  $(".slideContAsia").hide();  
  $(".slideBajaAsia").click(function(){
    $(".slideContAsia").slideToggle("slow");
  });
  //Deslizante C.Europa
  $(".slideContEuro").hide();  
  $(".slideBajaEuro").click(function(){
    $(".slideContEuro").slideToggle("slow");
  });
  //Deslizante Masa
  $(".slideContMasa").hide();  
  $(".slideBajaMasa").click(function(){
    $(".slideContMasa").slideToggle("slow");
  });

  //Colapso de la barra de navegación la hacer click en menú hamburguesa
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  //Animación del logo
  $("img.animado").hover(function(){
    var bufa = $("img.animado");
    bufa.animate({height: '100px'}, "fast");
    bufa.animate({width: '100px'}, "fast");
    bufa.animate({height: '100%'}, "fast");
    bufa.animate({width: '100%'}, "fast");
  });
});
  
