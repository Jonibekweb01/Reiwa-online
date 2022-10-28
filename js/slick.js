


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
myFunction(x) // Call listener function at run time