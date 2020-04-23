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
                zIndex: 0,
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

    // 点击显示视频
    console.log($('.icon-video').eq(0));
    console.log($(".modal"));
    $('.icon-video').eq(0).on('click', function () {
        $(".modal").eq(0).show()
    })
    //点击叉号关闭视频
    $("#chahao").eq(0).on('click', function () {
        $(".modal").eq(0).hide()
    })
    // 点击显示视频
    $('.icon-video').eq(1).on('click', function () {
        $(".modal").eq(1).show()
    })
    //点击叉号关闭视频
    $(".sit a").eq(1).on('click', function () {
        $(".modal").eq(1).hide()
    })

})