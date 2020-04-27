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

    // 弹出的输入框 
    $(".el-dialog").css({
        marginTop: "15vh",
        width: "40%",
    })
    //点击发表评论，显示用户登录界面
    $(".el-button--default").on('click', function () {
        $(".el-dialog__wrapper").hide()
    })
    $(".enter-btn").on('click', function () {
        $(".layui-layer ").show()
    })
    //点击取消，隐藏用户登录界面
    $(".btn").on('click', function () {
        $(".el-dialog__wrapper").show()
        $(".el-input__inner").text('')

    })
    //请输入姓名,获得焦点
    $(".el-input__inner").eq(0).on('focus', function () {
        var se = $(".el-input__inner").eq(0).val().trim()
        if (se.length == 0) {
            $(".el-form-item__error").eq(0).show()
        }
    })
    //请输入姓名,失去焦点
    $(".el-input__inner").eq(0).on('blur', function () {
        var se = $(".el-input__inner").eq(0).val().trim()
        if (se.length == 0) {
            $(".el-form-item__error").eq(0).show()
        } else {
            $(".el-form-item__error").eq(0).hide()

        }
    })

    //请输入手机号,获得焦点
    $(".el-input__inner").eq(1).on('focus', function () {
        var seds = $(".el-input__inner").eq(1).val().trim()
        if (seds.length == 0) {
            $(".el-form-item__error").eq(1).show()
        }
    })
    //请输入手机号,失去焦点
    $(".el-input__inner").eq(1).on('blur', function () {
        var seds = $(".el-input__inner").eq(1).val().trim()
        if (seds.length !== 11) {
            $(".el-form-item__error").eq(1).show()
            $(".el-form-item__error").eq(1).text('请输入正确的手机号')
        } else {
            $(".el-form-item__error").eq(1).hide()
        }
    })

    // 中奖名单 
    $(".lottery-btn").on('click', function () {
        $(".layui-layers").show()
    })
    $(".layui-layers").on('click', function () {
        $(".layui-layers").hide()
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

}) //0