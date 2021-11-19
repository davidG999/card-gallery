const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    addDarkenClasses()

    slide.classList.add('active');
    slide.classList.remove('darken');
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
}

function addDarkenClasses() {
  slides.forEach((slide) => {
    slide.classList.add('darken');
  })
}