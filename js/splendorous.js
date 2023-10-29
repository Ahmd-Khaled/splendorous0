let menubar = document.querySelector(".header .menu-bar");
let menulinks = document.querySelector(".header .menulinks");
let slides = document.querySelectorAll(".landing .container .view");
let slidescount = slides.length;
let leftArrow = document.querySelector(".landing .left");
let rightArrow = document.querySelector(".landing .right");
let activeItemNum = 0;

menubar.addEventListener("click", function () {
    this.classList.toggle("transformed");
    menulinks.style.display = "block";

    if (!menubar.classList.contains("transformed")) {
        menulinks.style.display = "none";
    } 
});

// Remove not active div from Slider
slides.forEach(function (item) {
    if (!item.classList.contains("active")) {
        item.style.display = "none";
    }
});

leftClick();
rightClick();


function leftClick () {
    if (activeItemNum == 0) {
        leftArrow.classList.add("disabled");
    }
    leftArrow.onclick = function() {
        rightArrow.classList.remove("disabled");
        if(activeItemNum > 0) {
            // console.log(`ActiveItemNum: ${activeItemNum}`);
            slides[activeItemNum - 1].classList.add("acive");
            slides[activeItemNum - 1].style.display = "flex";
            slides[activeItemNum].classList.remove("acive");
            slides[activeItemNum].style.display = "none";
            activeItemNum = activeItemNum - 1;
            // console.log(activeItemNum);
            if (activeItemNum == 0) {
                leftArrow.classList.add("disabled");
            }
        }
    }
}
function rightClick () {
    rightArrow.onclick = function() {
        leftArrow.classList.remove("disabled");
        if (activeItemNum == 4) {
            rightArrow.classList.add("disabled");
        }
        if(activeItemNum < 4) {
            slides[activeItemNum + 1].classList.add("acive");
            slides[activeItemNum + 1].style.display = "flex";
            slides[activeItemNum].classList.remove("acive");
            slides[activeItemNum].style.display = "none";
            activeItemNum = activeItemNum + 1;
            if (activeItemNum == 4) {
                rightArrow.classList.add("disabled");
            }
        }
    }
}