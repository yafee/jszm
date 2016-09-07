$(function() {
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $('.reTop').show();
    } else {
      $('.reTop').hide();
    }
  });
  $('.reTop').on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500)
  })
  var navList = $('.menu li');
  $('.nav-toggle').on('click', function() {
    $('.menu').slideToggle();
  });
  navList.on('click', function() {
    $('.menu').slideToggle();
  })
});
