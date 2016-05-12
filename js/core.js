$(document).ready(function(){

	var ids = [
		"start",
		"hauptmenue",
		"Versuchsaufbau",
		"devices",
		"main",
		"emv",
		"proto",
		"daten",
		"einst"
	];

	for (var i = 0; i < ids.length; i++) {
		document.cookie = ids[i] + '=' + 0;
	}
		
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
    resizeDescription();
	slide = ($(".slider"))[0];
  	var metrics = calculateSize(slide);
  	$(".slider").each(function() {
  		resizeSlides(this,metrics);
	});

});

//Resize Sliders when Window is resized

$(window).resize(function() {
  resizeDescription();
  slide = ($(".slider"))[0];
  var metrics = calculateSize(slide);
  $(".slider").each(function() {
  	resizeSlides(this,metrics);
	});
});


// Slider Funktion zur Initialisierung von Imageslides 

$.fn.initSlider = function(desctag) {

    var list = this.children('ul');

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
 



 function resizeDescription() {
 	
 	$(".description").each(function() {
	if($(window).width() > 1000) {
	  	rightCol = $(this).parent();
	  	secTit = rightCol.children(".sectionTitle");
	  	takenSpace = secTit.height();
	  	prevNext = rightCol.children(".nextprev");
	  	prevNext = prevNext[1];
	  	takenSpace += 2*(prevNext.offsetHeight);
	  	height = $(window).height() - 280 - takenSpace;
	  	$(this).css({height:height});
	} else {
		$(this).css("height","");
	}
  });
 }


 function calculateSize(elem) {
  	var container = $(elem).parent();
  	var list = $(elem).children('ul');
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

	var metrics = {
		slideWidth : slideWidth,
		slideHeight : slideHeight,
		sliderUlWidth : sliderUlWidth
	}
	return metrics;


   }
 function resizeSlides(elem, m) {

 	var list = $(elem).children('ul');
 	list.children('li').each(function () {
		$(this).css({width:m.slideWidth, heigth:m.slideHeight});	
		$(this).children("img").each( function() {
			$(this).css({width:m.slideWidth, heigth:m.slideHeight});
		});
	});
	
	$(elem).css({ width: m.slideWidth, height: m.slideHeight});
	list.css({width: m.sliderUlWidth, marginLeft: 0 });
 }

