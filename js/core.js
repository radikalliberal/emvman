$(document).ready(function(){

	
    $('[data-toggle="tooltip"]').tooltip();

    $('a[href^="."]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});


// Slider Funktion zur Initialisierung von Imageslides 

$.fn.initSlider = function(desctag) {
    var list = this.children('ul');
   	var slideCount = list.children('li').length;
	var slideWidth = list.children('li').width();
	var slideHeight = list.children('li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	this.css({ width: slideWidth, height: slideHeight });
	list.css({width: sliderUlWidth, marginLeft: - slideWidth });
	
    list.children('li:last-child').prependTo(list);

    this.children('a.control_prev').click(function () {
        moveLeft(this, list, list.children('li').width());
        changeDescription(desctag, "backward");
    });

    this.children('a.control_next').click(function () {
        moveRight(this, list, list.children('li').width());
        changeDescription(desctag, "forward");
    });

    function moveLeft(slider, list, slideWidth) {
        list.animate({
            left: + list.children('li').width()
        }, 200, function () {
            list.children('li:last-child').prependTo(list);
            list.css('left', '');
        });
    };

    function moveRight(slider, list, slideWidth) {
        list.animate({
            left: - list.children('li').width()
        }, 200, function () {
            list.children('li:first-child').appendTo(list);
            list.css('left', '');
        });
    };

};
 

 //Resize Sliders when Window is resized

 $( window ).resize(function() {

  $(".slider").each(function () {
  	var container = $(this).parent();
  	var list = $(this).children('ul');
   	var slideCount = list.children('li').length;
	var slideWidth = container.width();
	var slideHeight = list.children('li').height();
	var sliderUlWidth = slideCount * slideWidth;

	var aspectratio = 1.2923588;
	var height = $(window).height() - 220;

	if(slideWidth > (height*aspectratio)) {
		slideWidth = height*aspectratio;
	} else {
		slideHeight = slideWidth/aspectratio;
	}

	list.children('li').each(function () {
		$(this).css({width:slideWidth, heigth:slideHeight});	
		$(this).children("img").each( function() {
			$(this).css({width:slideWidth, heigth:slideHeight});
		});
	});
	
	$(this).css({ width: slideWidth, height: slideHeight});
	list.css({width: sliderUlWidth, marginLeft: 0 });
	
    list.children('li:last-child').prependTo(list);
   });
});

