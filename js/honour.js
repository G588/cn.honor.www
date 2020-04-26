$(function () { //0

    //设置定时器，进行不断变化
    var st = 0
    var timer = setInterval(function () {
        st++
        if (st == 9) {
            st = 0
            $(".comment-items").fadeIn(1000)
        } else {
            $(".comment-items").eq(st - 1).hide()
        }
    }, 1000)

    //点击查看活动规则显示内容
    $(".area-btn").on('click', function () {
        $(".layui-layer ").show()
    })

    //点击关闭按钮隐藏内容
    $(".layui-layer-close2").on('click', function () {
        $(".layui-layer ").hide()
    })

}) //0