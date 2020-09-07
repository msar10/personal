//Sticky menu for all device
window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
//Active change for all device
/* 
$(document).on('click','ul li',function(){
    $(this).addClass('menu-active').siblings().removeClass('menu-active');
})
*/

 // Navigation active state on scroll
  
 var nav_sections = $('section');
 var main_nav = $('.nav-menu, #mobile-nav');
 var main_nav_height = $('#header').outerHeight();

 $(window).on('scroll', function() {
   var cur_pos = $(this).scrollTop();

   nav_sections.each(function() {
     var top = $(this).offset().top - main_nav_height,
       bottom = top + $(this).outerHeight();

     if (cur_pos >= top && cur_pos <= bottom) {
       main_nav.find('li').removeClass('menu-active menu-item-active');
       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active');
     }
   });
 });

//Active link

$(document).ready(function(){
    /*
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("menu-active");
        $("this").addClass("menu-actve");
    });


    $('li').on('click',function(){
        $(this).siblings().removeClass("menu-active");
        $(this).addClass("menu-active");
    })
*/
jQuery('ul.sf-menu').superfish({
    pathClass:	'current'
});
    // Skills section
    $('#skills').waypoint(function() {
        $('.progress, .progress-bar').each(function(){
            $(this).css("width", $(this).attr('aria-valuenow') + '%');
        });
    }, {
        offset: '80%'
    });

    //counterUp start here
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //portfolio start here
    
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
    
      $('#portfolio-filters li').on('click', function() {
        $("#portfolio-filters li").removeClass('filter-active');
        $(this).addClass('filter-active');
    
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });
      
     //venobox start here
     $(document).ready(function(){
        $('.venobox').venobox({
            infinigall : true,
        }); 
    });
    //owl carousel start here
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 4
          },
          900: {
            items: 6
          }
        }
      });
      // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });
})

//Smoth scroll for all browser
$("a").on('click', function(event){
    if (this.hash !== "") {
        event.preventDefault();
        var hash=this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
//Mobile-nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}