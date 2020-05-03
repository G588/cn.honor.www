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

            }) //0