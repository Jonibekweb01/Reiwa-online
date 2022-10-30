


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
