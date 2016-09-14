$(".seemore").click(function() {
	var clientHeight = $(window).height();
	$('body').animate({
		'scrollTop': clientHeight
	}, 'linear', function() {});
});