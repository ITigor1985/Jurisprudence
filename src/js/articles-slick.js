$(document).ready(function () {
    const width = document.body.clientWidth;
    if (width >= 768 && width < 1280) {
      $('.articls__list').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
      });
    }
  });