$(function () { //0
    // 一 
    //鼠标移入显示亮的新浪与QQ空间图片
    $(".gy-share-list li").on('mouseover', function () {
        index = $(this).index()
        $('.gy-share-black').eq(index).hide().next().show()
    })
    //鼠标移出显示暗的新浪与QQ空间图片
    $(".gy-share-list li").on('mouseout', function () {
        $('.gy-share-black').eq(index).show().next().hide()
    })

$(".swiper-wrapper").scroll(function(){
    console.log($(".swiper-wrapper").scrollLeft());
})
    // 二
}) //0