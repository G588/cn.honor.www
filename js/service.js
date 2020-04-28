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



}) //0