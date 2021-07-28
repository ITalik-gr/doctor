
const elems = document.querySelectorAll('.doctor-card__image');

[...elems].forEach(elem => elem.addEventListener('click', changeClass))


function changeClass(e) {
	this.querySelector('.doctor-card-info').classList.toggle('doctor-card-info__active');
};

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

