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
        $(this).toggleClass('sd').siblings().removeClass('sd')
        $(this).toggleClass('pox').siblings().removeClass('pox')
    })

$(".v3-s-cn-type-content-type-item ").on('mouseenter',function(){
    $(".v3s").toggle()
})




}) //0

