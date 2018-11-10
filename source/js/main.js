//  Burger для мобильный устройств
$(document).ready(function(){
    $(".header__burger").click(function(){
        $(".overlay__main").fadeToggle(400);
        $('.page-header').fadeToggle(400);
    });
});
$('.overlay__main').on('click', function(){
    $(".overlay__main").fadeToggle(200);
     $('.header__burger').fadeToggle(200);
});

// menu
$(document).ready(function(){
    $(".nav__item_a").click(function(){
        $(".overlay__main").fadeToggle(200);
        $('.page-header').fadeToggle(400);
    });
    
});

// анимация

$(document).ready(function(){
    $(".bg-green").click(function(){
      $(".first_span").toggleClass("active1");
    });
    $(".bg-blue").click(function(){
        $(".second_span").toggleClass("active2");
      });
      $(".bg-purple").click(function(){
        $(".third_span").toggleClass("active3");
      });
});
$(document).ready(function(){
$(".list__item").click(function(){
    if($(".first_span").hasClass('active1') &&  $(".second_span").hasClass('active2') && $(".third_span").hasClass("active3") ){
        $(".bg-yellow").css("transform", "translateX(0)");
    }else{
        $(".bg-yellow").css("transform", "translateX(500px)");
    }
  });
});

new WOW().init();
//  jQuery(document).ready(function() {
//   jQuery('.block_advantage__item').addClass('hidden').viewportChecker({
//    classToAdd: 'visible animated bounceInLeft lightpurple',
//    offset: 100
//   });
// });


// jQuery(document).ready(function() {
//     jQuery('.animation__img').addClass('hidden').viewportChecker({
//      classToAdd: 'visible animated bounceInLeft lightpurple',
//      offset: 100
//     });
//   });   

//js mask input

$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("8(999) 999-9999");
  });
  


$(function(){
    $(".btn-click").click(function(){
        $(".pop-up__overlay").fadeIn();
        $(".pop-up").fadeIn();
    })
    $(".pop-up__close-img").click(function(){
        $(".pop-up__overlay").fadeOut();
        $(".pop-up").fadeOut();
    })
})

