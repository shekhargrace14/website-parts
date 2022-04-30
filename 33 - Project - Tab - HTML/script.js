// Targeting Elements 

let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")

// Targetting Element for changes

let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")

button1.addEventListener('click', function(){
    box1.classList.add("active")
    box2.classList.remove("active")
    box3.classList.remove("active")

    button1.classList.add("active-button")
    button2.classList.remove("active-button")
    button3.classList.remove("active-button")
})

button2.addEventListener('click', function(){
    box2.classList.add("active")
    box1.classList.remove("active")
    box3.classList.remove("active")

    button2.classList.add("active-button")
    button1.classList.remove("active-button")
    button3.classList.remove("active-button")

})

button3.addEventListener('click', function(){
    box3.classList.add("active")
    box1.classList.remove("active")
    box2.classList.remove("active")

    button3.classList.add("active-button")
    button1.classList.remove("active-button")
    button2.classList.remove("active-button")
})
