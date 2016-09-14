var Experience = function() {

}

Experience.prototype = {
	g: function(id) {
		return document.getElementById(id);
	},
	gClass: function(classname) {
		return document.getElementsByClassName(classname);
	},
	getTop: function(ele) {
		return ele.offsetTop;
	},
	getPosition: function(node) {
		var left = node.offsetLeft;
		var top = node.offsetTop;
		var parent = node.offsetParent;
		while(parent != null) {
			left += parent.offsetLeft;
			top += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return top;
	},
	scrollTop: function(to) {
		window.scroll(0, to);
	},
	get_body_w: function() {
		return document.body.offsetWidth;
	},
	get_body_h: function() {
		return document.body.offsetheight;
	},
	show_year: function(year) {
		var c_year = this.g('content_year_' + year);
		var top = this.getPosition(c_year)-this.getTop(c_year);
		this.scrollTop(top);
		this.expand_year(year, this.g('scrubber_year_' + year));
	},
	show_month: function(year, month) {
		var c_month = this.g("content_month_" + year + "_" + month);
		var top = this.getPosition(c_month)-10;
//		console.log(this.getTop(c_month))
		this.scrollTop(top);
		this.highlight(this.g("scrubber_month_" + year + "_" + month));
	},
	highlight: function(element) {
		var months = this.gClass('scrubber_month');
		for(var i = months.length - 1; i >= 0; i--) {
			months[i].className = months[i].className.replace(/current/g, '');
		}
		element.className = element.className + 　' current';
	},
	expand_year: function(year, element) {
		var months = this.gClass("scrubber_month");
		var show_month = this.gClass("scrubber_month_in_" + year);
		var years = this.gClass("scrubber_year")
		for(var i = months.length - 1; i >= 0; i--) {
			months[i].style.display = "none";
		}
		for(var i = show_month.length - 1; i >= 0; i--) {
			show_month[i].style.display = "block";
		}
		for(var i = years.length - 1; i >= 0; i--) {
			years[i].className = years[i].className.replace(/current/g, '');
		}
		element.className = element.className + 　' current';
	}
}