$(function() {
	// 菜单滑动出现于消失
	$('#menu').hide();
	var $lis = $('#menu>li');
	var flag = true;
	$('#list').click(function() {
		slideMenu();
	});
	// 点击切换service菜单
	$servicelis = $('#service_menu li');
	$servicelis.eq(0).find('p').css("color", "#FF0000");
	$servicelis.eq(0).find('img').attr("src", "images/red" + 0 + ".jpg")
	$('#service0').show();
	$servicelis.click(function() {
		var index = $(this).index();
		$servicelis.each(function(index, value) {
			$(value).find('img').attr("src", "images/service" + index + ".jpg");
			$(value).find('p').css("color", "#000000");
			$('#service' + index).hide();
		});
		$servicelis.eq(index).find('p').css("color", "#FF0000");
		$servicelis.eq(index).find('img').attr("src", "images/red" + index + ".jpg");
		$('#service' + index).show();
	});

	// 鼠标经过盖住图片
	$('#cover').hide();
	$recentlis = $('#recent li');
	var windowWidth = $(window).width() / 4;
	$recentlis.mouseover(function() {
		var index = $(this).index();
		var m = index % 4; //判断当前li是一行中的第几个
		var n = Math.floor(index / 4); //判断当前li是在第几行
		var left = m * windowWidth;
		var top = n * 277;
		$('#cover').css({
			"left": left + "px",
			"top": top + "px"
		}).show();
	});

	// 滑动出现导航菜单
	function slideMenu() {
		if (flag) {
			$('#menu').fadeIn();
			var left = 0;
			var paddingright = 40;
			var width = 0;
			$lis.each(function(index, value) {
				if (index != 0 & index != 1) {
					left = left + width + paddingright;
					$(value).animate({
						left: left + "px",
						opacity: 1
					});
				} else if (index == 1) {
					left = width + paddingright;
					$(value).animate({
						left: width + 40 + "px",
						opacity: 1
					});
				} else if (index == 0) {
					$(value).animate({
						left: 0,
						opacity: 1
					});
				}
				width = $lis.eq(index).width();
			});
			flag = false;
		} else {
			$lis.each(function(index, value) {
				$(value).animate({
					left: 0,
					opacity: 0
				}, function() {
					$('#menu').fadeOut();
				});
			});
			flag = true;
		}
	}
});