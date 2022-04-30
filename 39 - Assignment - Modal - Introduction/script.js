let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")

let box = document.querySelector(".box")


button1.addEventListener('click', function(){
    box.classList.add("active")

})

button2.addEventListener('click', function(){
    box.classList.remove("active")
})






