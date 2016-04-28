
$.fn.initSlider = function() {
  console.log("in der funktion");
    var list = this.children('ul');
   	var slideCount = list.children('li').length;
	var slideWidth = list.children('li').width();
	var slideHeight = list.children('li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	this.css({ width: slideWidth, height: slideHeight });
	
	list.css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    list.children('li:last-child').prependTo('ul');

    this.children('a.control_prev').click(function () {
        moveLeft(this, list, slideWidth);
    });

    this.children('a.control_next').click(function () {
        moveRight(this, list, slideWidth);
    });

    function moveLeft(slider, list, slideWidth) {
        list.animate({
            left: + slideWidth
        }, 200, function () {
            list.children('li:last-child').prependTo(list);
            list.css('left', '');
        });
    };

    function moveRight(slider, list, slideWidth) {
        list.animate({
            left: - slideWidth
        }, 200, function () {
            list.children('li:first-child').appendTo(list);
            list.css('left', '');
        });
    };

};

 
