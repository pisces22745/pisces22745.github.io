var experience = new Experience();
window.onscroll = function() {
	var top = document.body.scrollTop;
	var scru_height = $('header').height() + $('.about').height() + $('.skill').height() + 160;
	var scrubber = experience.g("scrubber");
	if(top > scru_height) {
		scrubber.style.position = 'fixed';
		scrubber.style.top = "0";
		scrubber.style.left = "0";
	} else {
		scrubber.style.position = '';
		scrubber.style.top = '';
		scrubber.style.left = '';
	}
}
$('#scrubber_year_2016').click(function() {
	experience.show_year(2016);
	return false;
});
$('#scrubber_month_2016_6').click(function() {
	experience.show_month(2016, 6);
	return false;
});
$('#scrubber_month_2016_3').click(function() {
	experience.show_month(2016, 3);
	return false;
});