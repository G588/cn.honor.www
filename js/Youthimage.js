$(function () {
    // 一.导航栏
    // 鼠标经过
    $(".site-topnav>li>a").mouseover(function () {
        $(".nav-link>p").mouseover(function () {})
        $(this).siblings("ul").stop().fadeIn();
    });
    // 鼠标离开
    $(".nav-li").mouseout(function () {
        $(this).find("ul").stop().fadeOut();
    });

    // 只要鼠标滚动，导航栏变色,否则不变色
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 80) {
            $(".gallery-header").css({
                background: "#000",
                zIndex: 999,
            })
        } else {
            $(".gallery-header").css({
                background: "",
                zIndex: 999,
            })
        }
    })

    //鼠标移入，遮罩层出现，移出隐藏
    $(".latest-item").on('mouseover', function () {
        $(this).find('.latest-info').show()
    })
    $(".latest-item").on('mouseout', function () {
        $(this).find('.latest-info').hide()
    })
    var myVid = document.getElementById("video")
    // 点击显示视频
    console.log($('.icon-video').eq(0));
    console.log($(".modal"));
    $('.icon-video').eq(0).on('click', function () {
        $(".modal").eq(0).show()
        //视频播放
        $('video').trigger('play');
    })
    //点击叉号关闭视频
    $("#chahao").eq(0).on('click', function () {
        $(".modal").eq(0).hide()
        // 视频暂停
        $('video').trigger('pause');
    })
    // 点击显示视频
    $('.icon-video').eq(1).on('click', function () {
        $(".modal").eq(1).show()
        //视频播放
        $('video').trigger('play');
    })
    //点击叉号关闭视频
    $(".sit a").eq(1).on('click', function () {
        $(".modal").eq(1).hide()
        // 视频暂停
        $('video').trigger('pause');
    })

    // 返回顶部
    $(".go-back-top").click(function () {
        $('html,body').stop().animate({
            'scrollTop': 0
        })
    })

    //如果滚动出去的距离大于100，就显示返回顶部按钮
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $(".go-back-top").show()
        } else {
            $(".go-back-top").hide()
        }
    })

})