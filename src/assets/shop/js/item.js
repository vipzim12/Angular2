$(document).ready(function() {
    //slide product
   $('.slideshow-product').owlCarousel({
        loop:true,
        margin:0,
        autoplay:false,
        autoplayTimeout:4000,
        nav:false,
        dots:false,
        navText: false,
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            580:{
                items:1
            },
            992:{
                items:1
            }
        }
    })

     //sub slide product
   $('.quickViewThumbImg').owlCarousel({
        loop:false,
        margin:0,
        autoplay:false,
        autoplayTimeout:4000,
        nav:false,
        dots:false,
        navText: false,
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:5
            },
            580:{
                items:5
            },
            992:{
                items:5
            }
        }
    })

   $('[data-toggle="tooltip"]').tooltip();
});
