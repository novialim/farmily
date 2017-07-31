function scrollDiv() {
  $(".aboutus").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutus-section").offset().top -100},
        'slow');

});
}
scrollDiv();