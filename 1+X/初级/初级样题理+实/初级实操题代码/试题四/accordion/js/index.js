$(".box ul li h2").click(function(e){
    e.stopPropagation();
     //（1）（2）被点击的h2的next的div下拉展开，其余的li内部的div上拉收起，时间800毫秒。
    $(this).next().stop().        .parents("li").siblings().find("div").stop().         ;
    $(this).parent().stop().addClass("cur").siblings().stop().removeClass("cur");
})
 //（3）点击事件
$(document).        (function(){
     //所有div上拉收起，时间800毫秒。
    $(".box ul li").find("div").        ;
})