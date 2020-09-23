const testmonial = document.querySelectorAll(".testmonial");
const slideLeft = document.querySelectorAll(".slide-left");
const slideRight = document.querySelectorAll(".slide-right");

for (let i = 1; i < testmonial.length; i++){
    testmonial[i].classList.add("hide");
}

for (let i = 0; i < slideLeft.length; i++){
    slideLeft[i].addEventListener("click", function(){
        testmonial[0].classList.toggle("hide");
        testmonial[1].classList.toggle("hide");
    });
}

for (let i = 0; i < slideRight.length; i++){
    slideRight[i].addEventListener("click", function(){
        testmonial[0].classList.toggle("hide");
        testmonial[1].classList.toggle("hide");
    });
}

document.addEventListener('keyup', (e) => {
    if(e.keyCode === 37 || e.keyCode === 39) {
        testmonial[0].classList.toggle("hide");
        testmonial[1].classList.toggle("hide");
    }
})