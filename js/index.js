$(function(){
    // $('#eliteTabBox a').width( $('#eliteBodyTit')[0].offsetWidth/4 + 'px');
    console.log($('#eliteBodyTit'))
    // 轮播图
    var swiper = new Swiper('.banner', {
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
    //精英律师--主题-- 选项卡
    $('#eliteBody a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
    //精英律师--主题-- 箭头
    $('#nextEliteTab').click(function(){
       var eliteTabBoxLeft = $('#eliteTabBox').scrollLeft();
       console.log($('#eliteTabBox'))
    })
    $('#eliteTabBox').scroll(function(){
        console.log(e.offsetLeft)
    })
    new Swiper('.eliteBodyTit', {
        pagination: null,
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
    });
})