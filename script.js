$(function() {
  //导航跳转
  var navBarHg = $('.header').height(),
  hgArr = [];
  $('.main>div[id]').each(function() {
    hgArr.push($(this).offset().top);
  });
  $('.navList li,.menu li').on('click', function() {
    var index = $(this).index();
    // $(window).scrollTop(hgArr[index] - navBarHg);
    $(window).animate({scrollTop:hgArr[index] - navBarHg}, 1000);
    if (!$(this).hasClass('inline')) {
      $('.menu').slideToggle();
    }
  });
  //返回顶部
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
    }, 500);
  });
  $('.nav-toggle').on('click', function() {
    $('.menu').slideToggle();
  });
  stepImgVC();

  // 服务流程图片垂直居中
  function stepImgVC() {
    var stepImgHg = $('.stepImg').parent().css('height');
    $('.stepImg').css('line-height', stepImgHg);
  }
});
