sliderImg = document.querySelectorAll('.slidePagination img');
mainSlide = document.querySelectorAll('.mainSlide .slide');
activeIndex = 1;

var interval = setInterval(changeSlide, 3000);

for (let i = 0; i < sliderImg.length; i++) {
    sliderImg[i].addEventListener("click", function () {
        myStopFunction();

        activeIndex = i + 1;
        if (activeIndex == 5) {
            activeIndex = 0;
        }
        interval = setInterval(changeSlide, 3000);
        activeSliderImg = document.querySelector('.slidePagination .activeImg').classList.remove('activeImg');
        this.classList.add('activeImg');
        document.querySelector('.mainSlide .activeSlide').classList.remove('activeSlide');
        mainSlide[i].classList.add('activeSlide');
    })
}


function changeSlide() {
    activeSliderImg = document.querySelector('.slidePagination .activeImg').classList.remove('activeImg');
    sliderImg[activeIndex].classList.add('activeImg');
    document.querySelector('.mainSlide .activeSlide').classList.remove('activeSlide');
    mainSlide[activeIndex].classList.add('activeSlide');
    activeIndex += 1;
    if (activeIndex == 5) {
        activeIndex = 0;
    }
}

function myStopFunction() {
    clearInterval(interval);
}

menu = $(".menuButton");
navbarCollapse = $('.navbar-collapse');
menu.click(function () {
    navbarCollapse.toggleClass('opened');
    $('.menuIcon').toggleClass('open');
})



function myFunction(x) {
    if (x.matches) {
        $('.nav-item').click(function () {
            $(this).find('.navDropDown').slideToggle();
        })
    }
}

var x = window.matchMedia("(max-width: 1200px)")
myFunction(x)
x.addListener(myFunction)