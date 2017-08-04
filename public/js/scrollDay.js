function scrollDay() {

	$('.dayclick').click(function() {
	  event.preventDefault();	
	  var txt = $(this).text();

		switch (txt) {
		    case "Mon":
		        animateDay(".day0");
		        break;
		    case "Tue":
		        animateDay(".day1");
		        break;
		    case "Wed":
		        animateDay(".day2");
		        break;
		    case "Thur":
		        animateDay(".day3");
		        break;
		    case "Fri":
		        animateDay(".day4");
		        break;
		    case "Sat":
		        animateDay(".day5");
		        break;
		    case "Sun":
		        animateDay(".day6");
		}
	});
}

function animateDay(day){
	// $('#sidemenucontent').animate({
	// 	  scrollTop: $(day).offset().top - 230},
	// 	  'slow');
	var container = $('#sidemenucontent');
	var scrollTo = $(day);

	container.animate({
	    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
	}, 'slow');

	 
  		// $('#sidemenucontent').scrollTo(day, 1000)
}

scrollDay();


