
// let doctorInfo = document.querySelectorAll('.doctor-card-info'),
// doctorBtn = document.querySelectorAll('.doctor-card');

// console.log(doctorBtn);


// doctorBtn.addEventListener('click', function() {
//   doctorInfo.classList.toggle('doctor-card-info__active');
// });
// const swiper = new Swiper('.header-swiper-container', {

// });

new Swiper('.why-we-slider', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.why-we-next',
    prevEl: '.why-we-prev',
    disabledClass: 'why-we-sl',
  },
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  centerSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

