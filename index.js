$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })
  var hamburger = $('.icone');
  hamburger.on('click', function(){
    hamburger[0].classList.toggle("open");
    document.body.classList.toggle('panel-open');
  });
  $('.hidden-panel-close').on('click', function(){
    hamburger[0].classList.toggle("open");
    document.body.classList.toggle('panel-open');
  });
});
