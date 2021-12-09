$(document).ready(function() {
    $('.owl-carousel:not(".clients-logos, .project-carousel")').owlCarousel({
        loop:true,
        margin: 30,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
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
    }),

    $('.project-carousel').owlCarousel({
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
    }),
    
    $('.clients-logos').owlCarousel({
        loop:true,
        margin: 30,
        nav:false,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
});