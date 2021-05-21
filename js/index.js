sliderImg = document.querySelectorAll('.slidePagination img');
mainSlide = document.querySelectorAll('.mainSlide .slide');
activeIndex = 1;


for (let i = 0; i < sliderImg.length; i++) {
    sliderImg[i].addEventListener("click", function (e) {
        e.preventDefault();
        activeIndex = i;
        activeSliderImg = document.querySelector('.slidePagination .activeImg').classList.remove('activeImg');
        this.classList.add('activeImg');
        document.querySelector('.mainSlide .activeSlide').classList.remove('activeSlide');
        mainSlide[i].classList.add('activeSlide');
    })
}


 setInterval(function() {

     activeSliderImg = document.querySelector('.slidePagination .activeImg').classList.remove('activeImg');
    sliderImg[activeIndex].classList.add('activeImg');
    document.querySelector('.mainSlide .activeSlide').classList.remove('activeSlide');
    mainSlide[activeIndex].classList.add('activeSlide');
    activeIndex += 1;

    if (activeIndex == 5) {
        activeIndex = 0;
    }
}, 5000);