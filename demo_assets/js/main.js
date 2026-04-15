// ==================================================
// * Project Name   :  Repairon - Multi Repair Services HTML Template
// * File           :  CSS Base
// * Version        :  1.0.0
// * Last change    :  14 January 2022
// * Author         :  BDevs
// * Developer      :  Rakibul Islam Dewan
// ==================================================

(function($) {
  "use strict";

  // back to top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // back to top - End
  // --------------------------------------------------

  // preloader - Start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // preloader - End
  // --------------------------------------------------

  // sticky header - Start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header_section').addClass("sticky")
    } else {
      $('.header_section').removeClass("sticky")
    }
  });
  // sticky header - End
  // --------------------------------------------------

  // wow js - Start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // wow js - End
  // --------------------------------------------------

  // Partical - Start
  // --------------------------------------------------
  if ($('.banner_section').length) {
    const colors = ["#000323", "#74C138", "#D42222", "#b77bec", "#1d3a88"];

    const numBalls = 20;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width; 
      balls.push(ball);

      $('.banner_section').append(ball);
    }

    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
        );
    });
  }
  // Partical - End
  // --------------------------------------------------

  // parallax - start
  // --------------------------------------------------
  $('.scene').parallax({
    scalarX: 10.0,
    scalarY: 10.0,
  }); 
  // parallax - end
  // --------------------------------------------------

})(jQuery);