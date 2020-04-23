$(function () { //1
    // 一.导航栏
    // 鼠标移入导航栏下拉出内容 
    $(".has-child").mouseenter(function (e) {
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

}) //1