$('.main_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: '<i class="fa-solid fa-angle-left left"></i>',
      nextArrow: '<i class="fa-solid fa-angle-right right"></i>',
      responsive: [
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
              }
            }
      ]
});