$(document).ready(function(){
   
  // Testimonial2 Slider 
  $('.testimoni-2-slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1000,
    margin:30,
    autoplay:true,
    autoplaySpeed:1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Brand Slider 
$('.brand-slider-active').slick({
    dots: false,
    infinite: true,
    speed: 500,
    margin:0,
    arrows:false,
    padding:0,
    autoplay:true,
    autoplaySpeed:1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



      // Testimonial Slider
      $('.testimonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: false,
        asNavFor: '.testimonia-item-active',
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-right"></i></button>',
      });
      $('.testimonia-item-active').slick({
        slidesToShow: 1,
        dots: true,
        centerMode: true,
        centerPadding:0,
        arrows: true,
        slidesToScroll: 1,
        asNavFor: '.testimonial-nav',
        focusOnSelect: false,
      });


  });