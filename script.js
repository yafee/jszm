$(function() {
  toastr.options = {
    "positionClass": "toast-top-center",
    "timeOut": "1000"
  };
  //导航跳转
  var navBarHg = $('.header').height(),
    hgArr = [];
  $('.main>div[id]').each(function() {
    hgArr.push($(this).offset().top);
  });
  $('.navList li,.menu li,.footer li.link').on('click', function() {
    var index = $(this).index();
    //底部导航栏
    if ($(this).hasClass('link') && index > 2) {
      index = index - 1;
    }
    $('body,html').animate({ scrollTop: hgArr[index] - navBarHg }, 500);
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

  //联系我们表单验证
  var phoneReg = /^(0?1[3578]\d{9})$|^((0(10|2[1-3]|[3-9]\d{2}))?[1-9]\d{6,7})$/,
    nameReg = /^[a-zA-Z]{1,20}|[\u4e00-\u9fa5]{1,10}$/;
  $('.submit').on('click', function() {
    var name = $.trim($('#name').val()),
      tel = $.trim($('#tel').val()),
      need = $.trim($('#need').val());
    if (name === '') {
      toastr.error('姓名不能为空');
    } else if (tel === '') {
      toastr.error('电话不能为空');
    } else if (need === '') {
      toastr.error('需求不能为空');
    } else if (!nameReg.test(name)) {
      toastr.error('请输入正确姓名！');
    } else if (!phoneReg.test(tel)) {
      toastr.error('请输入正确手机号！');
    } else {
      $.ajax({
        type: 'POST',
        url: 'http://120.26.120.14:3000',
        data: JSON.stringify({ username: name, mobile: tel, need: need }),
        contentType: "application/json",
        crossDomain: true,
        success: function(data) {
          toastr.success(data.msg);
          $('#name,#tel,#need').val('');
        },
        error: function(data) {
          toastr.error(data.msg);
          $('#name,#tel,#need').val('');
        }
      });
    }
  });
  // 服务流程图片垂直居中
  function stepImgVC() {
    var stepImgHg = $('.stepImg').parent().css('height');
    $('.stepImg').css('line-height', stepImgHg);
  }
});
