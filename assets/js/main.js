$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin: 30,
        nav:false,
        autoplay: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});