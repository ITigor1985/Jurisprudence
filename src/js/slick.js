$(document).ready(function () {
  $('.reviews__list').slick({
    infinite: false,
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: '450px',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '150px',
        }
      },
      {        
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
    ],
  });
});
