$(document).ready(function(){
	
	// When user click on star rating button, redirect to respective page.
    $("#rateYo1").rateYo()
          .on("rateyo.set", function (e, data) {
              window.location = "../write"
    });

    // $('#submit').on('click',function(event){
	// 	event.preventDefault();
	// });



}); // End of document ready


