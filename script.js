const dots = document.querySelectorAll('.point')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const slides = document.querySelectorAll('.slide')
let counter = 0



function current(n) {
    carousel(counter = n)
}


slides.forEach((slide, index) => {
    slide.style.left = `${index*100}%`
})

next.addEventListener('click', () => {
    counter++
    carousel()

})
prev.addEventListener('click', () => {
    counter--
    carousel()

})

function carousel() {
    if (counter === slides.length) {
        counter = 0
    }
    if (counter < 0) {
        counter = slides.length - 1
    }
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter *100}%)`

    })


    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }
    dots[counter].classList.add('active')
}