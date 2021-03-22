// banner slider start
$('#banner_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<i class="fas fa-arrow-right next"></i>',
  prevArrow: '<i class="fas fa-arrow-left prev"></i>',
});
// banner slider end

// clean video start
$(document).ready(function () {
  $('.venobox').venobox();
});
// clean video start

// service slider part start

$('.services_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
});
// service slider part end

// counterup part start
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});
// counterup part start


// pjoject slider part start
$('.project_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
});


// pjoject slider part end


// update slider part start
$('.update_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
});

// update slider part end

// footer slider part start
$('.footer_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
});

// footer slider part end
