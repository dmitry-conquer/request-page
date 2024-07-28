import '../styles/style.scss';

const recentWorksNode = document.querySelector('.recent-projects__slider');

if (recentWorksNode) {
  new Swiper(recentWorksNode, {
    loop: true,
    wrapperClass: 'recent-projects__slider-wrapper',
    slideClass: 'slide-rp',
    spaceBetween: 340,
    // autoplay: {
    //   delay: 3000,
    //   pauseOnMouseEnter: true,
    // },
    slidesPerView: 1,
    parallax: true,
    speed: 1800,
    navigation: {
      nextEl: '.recent-projects__slider-next',
      prevEl: '.recent-projects__slider-prev',
    },
  });
}
