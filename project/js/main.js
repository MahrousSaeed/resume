
$(document).ready(function(){
    $('projectsContent').css('display','none')
    // header height = window height
    // $('header').css('height',$(window).innerHeight())

    //toggle left sideNav
    $('.bars').on('click',function(){
        $(this).toggleClass('move-bars')
        $('nav').toggleClass('show-nav')
        $('body').toggleClass('move-right')
        // $('.bars i').toggleClass('fa-bars fa-users')
    })
    
    $('nav ul li').on('click',function(){
        setTimeout(function(){
            $('.bars').toggleClass('move-bars')
            $('nav').toggleClass('show-nav')
            $('body').toggleClass('move-right')
        },1000)
       
        $(this).siblings().removeClass('active-link')
        $(this).addClass('active-link');
        if($(this).attr('class')){
            console.log($(this).attr('class'))
        }
        
    })
    $('.home').on('click',function(){
        $('main>div').fadeOut(700)
        $('#home').fadeIn(700)
    })
    $('.skills').on('click',function(){
        $('main>div').fadeOut(700)
        $('#skills').fadeIn(700);
        $('.progress-bar').animate({
            left:"0"
        },700)
       
        
    })
    $('.projects').on('click',function(){
        $('main>div').fadeOut(700)
        // $('#projects').css('display','block')
        $('#projects').fadeIn(700).animate({
            'opacity':'1',
            
        },700)
    })
    $('.contact').on('click',function(){
        $('main>div').fadeOut(700)
        $('#contact').fadeIn(700)
    })
    $('.about').on('click',function(){
        $('main>div').fadeOut(700)
        $('#about').fadeIn(700)
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
    

})

