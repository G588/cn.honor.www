$(function () { //0

    //查看更多-切换为-收起
    $(".v3-s-cn-more a ").eq(0).on('click', function () {
        $(".v3-s-cn-more a ").eq(0).hide()
        $(".v3-s-cn-more a ").eq(1).show()
        // 更多商品显示
        $(".v3-hidden").show()
    })

    //收起-切换为-查看更多
    $(".v3-s-cn-more a ").eq(1).on('click', function () {
        $(".v3-s-cn-more a ").eq(0).show()
        $(".v3-s-cn-more a ").eq(1).hide()
        // 更多商品隐藏
        $(".v3-hidden").hide()
    })

    //鼠标点击，显示边框和小三角,再次点击隐藏边框和小三角
    //当前的显示边框和小三角，他的兄弟隐藏边框和小三角

    $(".swiper-slide").on('click', function () {
        $(this).addClass('sd').siblings().removeClass('sd')
        $(this).addClass('pox').siblings().removeClass('pox')
        var index=$(this).index()
        $('.topsel').hide()
        $('.topsel').eq(index).toggle()
    })
    
    $(".swiper-slide").on('dblclick',function(){
        $('.topsel').hide()
    })



    //鼠标移入移出，服务活动部分变化
    $(".v3-card-body").on('mouseover', function () {
        $(this).css({
            paddingBottom: 39
        })
        $(this).find(".activities-find-more-cn").css({
            opacity: 1
        })

    })
    $(".v3-card-body").on('mouseout', function () {
        $(this).css({
            paddingBottom: 15
        })
        $(this).find(".activities-find-more-cn").css({
            opacity: 0
        })
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