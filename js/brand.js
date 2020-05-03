$(function () { //0
    // 一.导航栏
    // 鼠标移入导航栏下拉出内容 
    $(".spp .header-nav li").eq(0).mouseenter(function (e) {
        e.stopPropagation(true)
        $(".header-subnav").stop().animate({
            "top": 60,
        }, function () {
            $(".subnav-lists").stop().animate({
                "height": 380
            }, 500)
            $('.lists-box').fadeIn()
        })
    })

    // 鼠标移出导航栏隐藏内容 
    $(".spp").mouseleave(function (e) {
        e.stopPropagation(true)
        $('.lists-box').fadeOut()
        $(".subnav-lists").stop().animate({
            "height": 0
        }, function () {
            $(".header-subnav").stop().animate({
                "top": 0
            }, 500)
        })
    })

    // 1.给li添加点击事件
    $('.subnav-ul li').click(function () {
        // 1.1 让所有的隐藏
        $('.subnav-lists').hide();
        // 1.2 让点击的这个li的索引对应的那个页面显示
        let index = $(this).index();
        // console.log(index);
        $('.subnav-lists').eq(index).show();
        $(this).addClass('sts').siblings().removeClass('sts')
    })

    // 返回顶部
    $(".go-back-top").click(function () {
        $('html,body').stop().animate({
            'scrollTop': 0
        })
    })

    //如果滚动出去的距离大于100就显示返回顶部按钮
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $(".go-back-top").show()
        } else {
            $(".go-back-top").hide()
        }
    })

}) //0