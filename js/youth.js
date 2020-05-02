$(function () { //0
    // 轮播图 
    //定义ul li的变量
    var $bannerUl = $('.ec-slider ul'),
        $bannerLi = $('.ec-slider ul li');
    //动态获取ul的宽度
    $bannerUl.css('width', $bannerLi.width() * $bannerLi.length)
    //设置定时器
    setInterval(function () {
        $bannerUl.animate({
            "marginLeft": -$bannerLi.width()
        }, 500, function () {
            $(this).animate({
                "marginLeft": 0
            }, 0).find('li').eq(0).appendTo($(this))
            //把每次移动后的第一个li放到ul的最后面
        })
    }, 3000)

    $('.ec-slider>ul li').each(function (index, item) {
        // console.log(item)   // 代表的是循环遍历的每一项，是一个DOM对象
        // 2.2 创建li
        $('.ec-slider ol').append($('<li></li>'))
    })
    // 2.3 默认第一个是红色的背景
    $('.ec-slider ol li').eq(0).addClass('current')
    $('.ec-slider ol li').on('mouseover', function () {
        var index = $(this).index()
        // 3.2 给当前的小圆点要添加current类名
        $(this).addClass("current").siblings().removeClass('current')
    })

}) //0

