$(document).ready(function() {
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
   
//    //slideshow
//    $('#relatedProdDetail').owlCarousel({
//         loop:true,
//         margin:0,
//         autoplay:true,
//         autoplayTimeout:5000,
//         nav:true,
//         dots:false,
//         navText: false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             610:{
//                 items:2
//             },
//             1100:{
//                 items:3
//             }
//         }
//     })
    
});
