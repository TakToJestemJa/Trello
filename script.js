const dots = document.querySelectorAll('.point')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const slides = document.querySelectorAll('.slide')
let counter = 0

//funkcję należy dodać do html jako onclick, przełącza na konkretny obrazek czy cytat i zmienia kropki 

function current(n) {
    carousel(counter = n)
}

//przesuwa każdy cytat o 100% razy wartość indexu
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

    //dodanie active do konkretnej kropki i łączy ją z obrazem
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }
    dots[counter].classList.add('active')
}