$(function() {
  //导航跳转
  var navBarHg = $('.header').height(),
  hgArr = [];
  $('.main>div[id]').each(function() {
    hgArr.push($(this).offset().top);
  });
  $('.navList li,.menu li,.footer li.link').on('click', function() {
    var index = $(this).index();
    //底部导航栏
    if($(this).hasClass('link')&&index>2){
      index = index-1;
    }
    $('body,html').animate({scrollTop:hgArr[index] - navBarHg}, 500);
    if (!$(this).hasClass('inline')) {
      $('.menu').toggle();
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
    $('.menu').toggle();    
  });
  stepImgVC();

  //合作伙伴滚动

  // 服务流程图片垂直居中
  function stepImgVC() {
    var stepImgHg = $('.stepImg').parent().css('height');
    $('.stepImg').css('line-height', stepImgHg);
  }
});
