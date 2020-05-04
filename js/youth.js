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

    //固定导航部分
    var flag = true
    $(document).scroll(function () {
        if ($(window).scrollTop() >= 481.12) {
            $(".mod27-nav-wrp").css({
                "position": "fixed",
            })
        } else {
            $(".mod27-nav-wrp").css({
                "position": "relative",
                top: -3
            })
        }
        //添加相应的类名
        console.log($(".st"));
        if (flag) {
            $('.st').each(function (i, item) {
                if ($(document).scrollTop() >= $(item).offset().top) {
                    $(".clearfix li").eq(i).addClass("current").siblings().removeClass("current")
                }
            })
        }
        //点击导航栏，滚动到相应的位置
        $(".clearfix li").on('click', function () {
            flag = false
            var index = $(this).index()
            var set = $(".st").eq(index).offset().top + 2
            $('body,html').stop().animate({
                "scrollTop": set
            }, function () {
                flag = true
            })
            $(this).addClass("current").siblings().removeClass("current")
        })

        $(".dinw").on('click', function () {
            $("body,html").stop().animate({
                'scrollTop': 0
            })
        })
    })





}) //0