function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
	} 

function changeDescription(id, direction)
	{
		var index = (getCookie(id) == '') ? 0 : getCookie(id);
		$.getJSON('js/descriptions.json', function(data) {     
			console.log('document.cookie:' + document.cookie);
			console.log('getCookie('+id+'):' + getCookie(id));
			var newIndex = index;
			var numOfDescs = data['descriptions'][id].length;
			console.log('numOfDescs:' + numOfDescs); 
			console.log('newIndex:' + newIndex);   
			if(direction == 'forward') {
				console.log('(newIndex + 1):' + (newIndex*1 + 1 ));  
				newIndex = (newIndex*1 + 1) % numOfDescs;
				console.log('forw newIndex:' + newIndex);  
				
			} else {
				newIndex = (newIndex*1 - 1 + numOfDescs) % numOfDescs;
				console.log('backw newIndex:' + newIndex);  
			}
			console.log('newIndex:' + newIndex);  
			$( "#"+id ).fadeOut( "fast", function() {
				document.getElementById(id).innerHTML = data['descriptions'][id][newIndex].text;
			});
			$( "#"+id ).fadeIn( "slow");
			document.cookie = id + '=' + newIndex;
		}); 
	}

function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 200);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();