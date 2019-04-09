$(function () {
  // 轮播图
  var swiper = new Swiper('.banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 3500, //间隔时间
    autoplayDisableOnInteraction: false
  });
  //精英律师--主题-- 选项卡
  $('#eliteBody a').click(function (e) {
    e.preventDefault()
    $(this).tab('show');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })
  //精英律师--主题-- 箭头
  new Swiper('.eliteBodyTit', {
    pagination: null,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 0,
    nextButton: '.swiper-button-next',
  });
})