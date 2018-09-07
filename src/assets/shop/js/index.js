$(document).ready(function() {
    $(".listproduct").click(function(){
       $(".menushow").toggle();
    });
    // top menu
    if ($(this).scrollTop() >= $('.top-header').height() + $('.mid-header').height() && $(window).width() >= 992)
    {
        $('.mid-header').addClass("fixed");
    }
    else
    {
       $('.mid-header').removeClass("fixed");
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= $('.top-header').height() + $('.mid-header').height() && $(window).width() >= 992)
        {
            $('.mid-header').addClass("fixed");
        }
        else
        {
           $('.mid-header').removeClass("fixed");
        }
    });

    $('#LeftPush').click(function() {
        if ($('body').hasClass("offset-push-right"))
        {
            $('body').removeClass("offset-push-right");
            $('.headerPanelMobile').removeClass("offset-push-right");
            $('.offset-menu-left').removeClass("offset-menu-left-open");
        }
        else
        {
            $('body').addClass("offset-push-right");
             $('.headerPanelMobile').addClass("offset-push-right");
            $('.offset-menu-left').addClass("offset-menu-left-open");
        }
        
    }); 

    //Sroll-To-Top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {   
            $('.bttop').fadeIn();  
        } else {
            $('.bttop').fadeOut();
        }
    });
    $('.bttop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    //slideshow
//    $('.slideshow').owlCarousel({
//         loop:true,
//         margin:0,
//         autoplay:true,
//         autoplayTimeout:5000,
//         nav:true,
//         dots:true,
//         navText: false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             992:{
//                 items:1
//             }
//         }
//     })
   

//    //slideProducts
//    $('.slideProducts').owlCarousel({
//         loop:true,
//         margin:15,
//         autoplay:true,
//         autoplayTimeout:13000,
//         nav:true,
//         dots:false,
//         navText: false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             557:{
//                 items:2
//             },
//             992:{
//                 items:3
//             },
//             1227:{
//                 items:4
//             }
//         }
//     })
   

//    //Brand
//    $('.sliderBrand').owlCarousel({
//         loop:true,
//         margin:0,
//         autoplay:true,
//         autoplayTimeout:4000,
//         nav:false,
//         dots:false,
//         navText: false,
//         responsive:{
//             0:{
//                 items:2
//             },
//             580:{
//                 items:4
//             },
//             992:{
//                 items:7
//             }
//         }
//     })
    
});
