$(document).ready(function () {
  $('.reviews__list').slick({
    infinite: false,
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
    ],
  });
});
