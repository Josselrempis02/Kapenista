let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});


const navbar = document.querySelector("header");

        window.onscroll = ()=> {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
    }

//for slider
const mySlide = document.getElementsByClassName('slider');
const dot = document.getElementsByClassName('dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide () {
    counter += 1;
    slidefun(counter);
}

function plusSlide(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
    let i;
    for(i=0; i < mySlide.length; i++)
    {
        mySlide[i].style.display = "none";
    }
    for(i=0; i < dot.length; i++)
    {
        dot[i].classList.remove('active');
    }
    if(n > mySlide.length)
    {
        counter = 1;
    }
    if(n < 1)
    {
        counter = mySlide.length;
    }
    mySlide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}

