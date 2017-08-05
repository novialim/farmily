function scrollMarket(market) {

	if(market!==undefined){
	
		var container = $('#sidemenucontent');
		var scrollTo = $(market);

		container.animate({
		    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() -10
		}, 'slow');
	}	
}