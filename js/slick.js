


function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.wrapper-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    } else {
        $('.wrapper-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
}

var x = window.matchMedia("(max-width: 568px)")
myFunction(x)


function secondFunc(y) {
    if (x.matches) { // If media query matches
        $('.students__carousel').slick({
            lazyLoad: 'ondemand',
            autoplaySpeed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        });
    } else {
        $('.students__carousel').slick({
            lazyLoad: 'ondemand',
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
        });
    }
}


var y = window.matchMedia("(max-width: 568px)")
secondFunc(y)





function thirdFunc(f) {
    if (f.matches) { // If media query matches
        $('.partners__list').slick({
            slidesToShow: 400,
            slidesToScroll: 90,
            autoplay: true,
            autoplaySpeed: 0,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 0,
            slidesToScroll: 1,
            slidesToShow: 1.8,
            arrows: false,
            cssEase: 'linear',
            speed: 1000,
            initialSlide: 1,
            draggable: false,
            rtl: true,
        });
    } else {
        $('.partners__list').slick({
            slidesToShow: 400,
            slidesToScroll: 90,
            autoplay: true,
            autoplaySpeed: 0,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 0,
            slidesToScroll: 1,
            slidesToShow: 5,
            arrows: false,
            cssEase: 'linear',
            speed: 1000,
            initialSlide: 1,
            draggable: false,
            rtl: true,
        });
    }
}


var f = window.matchMedia("(max-width: 568px)")
thirdFunc(f)

function fouthFunc(d) {
    if (d.matches) { // If media query matches
        $('.partners__listS').slick({
            slidesToShow: 400,
            slidesToScroll: 90,
            autoplay: true,
            autoplaySpeed: 0,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 0,
            slidesToScroll: 1,
            slidesToShow: 1.8,
            arrows: false,
            cssEase: 'linear',
            speed: 1000,
            initialSlide: 1,
            draggable: false,
            rtl: false
        });
    } else {
        $('.partners__listS').slick({
            slidesToShow: 400,
            slidesToScroll: 90,
            autoplay: true,
            autoplaySpeed: 0,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 0,
            slidesToScroll: 1,
            slidesToShow: 4.2,
            arrows: false,
            cssEase: 'linear',
            speed: 1000,
            initialSlide: 1,
            draggable: false,
            rtl: false
        });
    }
}

var d = window.matchMedia("(max-width: 568px)")
fouthFunc(d)
