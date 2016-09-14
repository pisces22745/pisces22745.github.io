(function() {
	var flag = true;
	$(window).scroll(function() {
		var height = $('.about').height();
		if($("body")[0].scrollTop >= height + 40 && flag) {
			$('.circle').each(function(index, el) {
				var num = $(this).find('span').text();
				var that = this;
				var angle = 0;
				var count = 0;
				var clock = setInterval(function() {
					if(angle <= num * 3.6) {
						angle = angle + 3.6;
						if(angle <= 180) {
							$(that).find('.right').css('transform', "rotate(" + angle + "deg)");
						} else {
							$(that).find('.right').css('transform', "rotate(180deg)");
							$(that).find('.left').css('transform', "rotate(" + (angle - 180) + "deg)");
						};
					} else {
						clearInterval(clock);
					}
				}, 10);
			});
			flag = false;
		}
	});
})();