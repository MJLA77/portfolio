$(document).ready(function(){
    $(window).scroll(function(){
    var light_pos = $('.anchor').offset().top;
    var light_height = $('.anchor').height();
    var menu_pos = $('.nav-titles').offset().top;
    var scroll = $(window).scrollTop();

    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
        $('.nav-titles').addClass('nav-titles_black');
      $('.nav-titles').removeClass('nav-titles_opacity');
    }
    else {
        $('.nav-titles').removeClass('nav-titles_black');
      $('.nav-titles').addClass('nav-titles_opacity');
    }

  })
})