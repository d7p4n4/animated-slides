window.onload = function() {
  
  $(function () {
  
  var width = 720;
  var animationSpeed = 1000;
  var imgTime = 3000;
  var currentSlide = 1;
  
  var $slideCont = $('.slide-container');
  var $slides = $slideCont.find('.slides');
  var $slide = $slides.find('.slide');
  
  var interval;
  
  function startSlider() {
    interval = setInterval(function() {
      $slides.animate({marginLeft: '-='+width}, animationSpeed, function() {
      currentSlide++;
        if (currentSlide === $slide.length) {
          currentSlide = 1;
          $slides.css({marginLeft: 0});
        };
      });
    },imgTime);
  };
  
  function stopSlider() {
    clearInterval(interval);
  };
  
  $slideCont.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  
  startSlider();
});
  
}