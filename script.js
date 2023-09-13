const sliderPrev = document.querySelector('.slider__prev')
const sliderNext = document.querySelector('.slider__next')
const slides = document.querySelectorAll('.slider__element');

let current = 0;

sliderNext.addEventListener('click', () => {
  const currentSlide = document.querySelector('.slider__element--active');

  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add('slider__element--active')
    currentSlide.nextElementSibling.firstElementChild.classList.add('active')
    current -= 100
  } else {
    slides[0].classList.add('slider__element--active')
    slides[0].firstElementChild.classList.add('active')
    current = 100
  }

  currentSlide.classList.remove('slider__element--active')
  currentSlide.firstElementChild.classList.remove('active')


  slides.forEach(slide => slide.style.transform = `translate(${current}%)`)
})

sliderPrev.addEventListener('click', () => {
  const currentSlide = document.querySelector('.slider__element--active');

  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add('slider__element--active')
    currentSlide.previousElementSibling.firstElementChild.classList.add('active')
    current += 100
  } else {
    slides[slides.length - 1].classList.add('slider__element--active')
    slides[slides.length - 1].firstElementChild.classList.add('active')
    current = (slides.length * -100) + 200;
  }

  currentSlide.classList.remove('slider__element--active')
  currentSlide.firstElementChild.classList.remove('active')


  slides.forEach(slide => slide.style.transform = `translate(${current}%)`)
})

const galeryElements = document.querySelectorAll('.galery__element')
const galeryModal = document.querySelector('.galery__modal')
const galeryClose = document.querySelector('.galery__modal-close')


galeryElements.forEach(element => {
  element.addEventListener('click', () => {
    galeryModal.classList.add("galery__modal--active")
    galeryModal.children[1].src = element.firstElementChild.src;
  })
})

galeryClose.addEventListener('click', () => {
  galeryModal.classList.remove("galery__modal--active")
})

const eventElements = document.querySelectorAll('.event__list-element')
const eventMain = document.querySelector('.event__main-img')
const eventMainInfo = document.querySelector('.event__main-info')

eventElements.forEach(element => {
  element.addEventListener('click', () => {
    eventMain.src = element.src
    eventMainInfo.innerText = element.getAttribute('alt')
  })
})