$(document).ready(function() {

    // $(document.body).on('click', '.findoutmore' ,function(){

    $.urlParam = function(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        } else {
            return decodeURI(results[1]) || 0;
        }
    }

    $.get("../api/viewfarmer/" + $.urlParam("id"), function(farmer) {
        // Check if result is valid, otherwise redirect to 400 page
        if (farmer.result.length===0){
            window.location.href = "/400";
        }

        // console.log(farmer.result);
        // console.log(farmer.result[0].Market.address_txt);
        $(".farmerDetailsName").append(farmer.result[0].vendor_name);
        $("#farmerDetailsAddress").append(farmer.result[0].Market.address_txt);
        if (farmer.result[0].vendor_contact !== "") {
            var farmerContact = farmer.result[0].vendor_contact;

            var formattedFarmerContact = "(" + farmerContact.slice(0, 3) + ") " + farmerContact.slice(3, 6) + "-" + farmerContact.slice(6, 10);
            // $("#farmerDetailsContact").append(farmerContact+"\n");    
            $("#farmerDetailsContact").append(formattedFarmerContact);
        } else {
            $("#farmerDetailsContact").append(farmer.result[0].Market.contact);
        }
        $("#farmerDetailsDay").append(farmer.result[0].Market.opening_day);
        $("#farmerDetailsHours").append(farmer.result[0].Market.openinghours);

        // $('#farmerDetailsID').val($.urlParam("id"));

        var latlong = farmer.result[0].Market.latitude +"," + farmer.result[0].Market.longitude;
        $('#googlemapdir').attr('href','https://maps.google.com?q='+latlong);

        // Render Google static map
        $('#google_static_map').attr('src', `https://maps.googleapis.com/maps/api/staticmap?zoom=16&markers=color:red%7C${latlong}&size=264x129&key=AIzaSyDafs0nDO15dK34o_uDc3fnUQiefdv0Aec`)

        // https://www.google.com/maps/dir//32.796963,-117.25367/@32.7969589,-117.2558768,17z/data=!3m1!4b1

        // $('#googlemapdir').attr('href',"https://www.google.com/maps/embed/v1/directions?key=AIzaSyDyCoY7jwP299fZw-jX6JMWRS9_tYKAE_A&origin=\"\"&destination="+latlong+"");        

        // $('#googlemapdir').attr('href','https://www.google.com/maps/directions//'+latlong+"/@"+latlong+",17z");        

        $('.farmerDetailsReview').attr('href','//' + location.host + '/write?id='+$.urlParam("id"));
        console.log();

    });

    $.get("../api/viewreview/" + $.urlParam("id"), function(farmer) {
        populateFarmerDetailPage(farmer.result, $.urlParam("id"))
    });

    function populateFarmerDetailPage(vendor, id) {

        console.log("populateFarmerDetailPage reached");

        if (vendor.length > 0) {
            vendor.forEach((elem) => {

                $('.farmerDetailsCard').append("" +
                    '<div class="col s12 m6 l6">' +
                    '<div class="card transparent card-border-grey">' +
                    '<div class="farmerDetailsContent card-content black-text3">' +
                    '<span class="card-title">' +
                    '<img class="userAvatar avatar responsive-img" src="images/avatar/avatar.png" alt="">' +
                    `<h6 class="userName">${elem.user_name}</h6>` +
                     `<div class=\"rateyo userRateYo\" id=\"rateYo${elem.review_id}\"></div>` +
                    '</span></div>' +
                    '<div class="card-action reviewSection">' +
                    `<p class="black-text reviewtxt">${elem.review_text}</p>` +
                    '</div></div></div>');
            })

            setRating(vendor);

        } else {
            $('.farmerDetailsCard').append("" +
                "<p class=\"reviewtxt\">" +
                `<i>Be the first reviewer!</i>` +
                "</p>" +
                "<div class=\"divider updownpad\"></div>\n")
        }
    }

    function setRating(vendor) {

        for (var j = 0; j < vendor.length; j++) {
            
            var rateYoRating = vendor[j].rateYoInput;
            var rateYoCt = j+1;
            $(`#rateYo`+vendor[j].review_id).rateYo({
                rating: rateYoRating
            });
        }
    }


});