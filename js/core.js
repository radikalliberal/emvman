$(document).ready(function(){

	
    $('[data-toggle="tooltip"]').tooltip();

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});



    $('#bt1').click(function() {
        $('#mailcontent').attr('action',
                       'mailto:jan_scholz@gmx.net?subject=' +
                       'Anfrage EMV-Test-Software von ' + 
                       $('#email').val() + '&body=' + $('#commentsText').val());
        $('#mailcontent').submit();
        console.log('mail');
    });



});

