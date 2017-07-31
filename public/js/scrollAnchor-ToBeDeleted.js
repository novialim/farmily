var $ = require("jquery")(window);


module.exports = {
  scrollAnchor: function(anchor) {
    $('html,body').animate({
        scrollTop: $(anchor).offset().top -100},
        'slow');
  }
};