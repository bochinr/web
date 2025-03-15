$(".bottom_nav a").click(function (e) {
	e.stopPropagation();
	//被点击a的上一个div元素样式设置为block，其余项目的div的隐藏。
	$(this).prev().stop().			.parent().siblings().children(".layout-submenu").stop().		;
})
 //点击页面的任意地方，二级菜单全部取消
$(document).click(function () {
	$(".layout-submenu").css("display", "none");
})