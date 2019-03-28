$(function(){
    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 3500, //间隔时间
        // autoplayDisableOnInteraction: false
    });     
    //业务领域--主题-- 选项卡
    $('#businessBody a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    })
    $('#eliteBody a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
      })
})