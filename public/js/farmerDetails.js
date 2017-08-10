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
        console.log(farmer.result);
        console.log(farmer.result[0].Market.address_txt);
        $(".farmerDetailsName").append(farmer.result[0].vendor_name);
        $("#farmerDetailsAddress").append(farmer.result[0].Market.address_txt);
        if (farmer.result[0].vendor_contact !== "") {
            var farmerContact = farmer.result[0].vendor_contact;

            var formattedFarmerContact = "(" + farmerContact.slice(1, 4) + ") " + farmerContact.slice(4, 7) + "-" + farmerContact.slice(7, 11);
            // $("#farmerDetailsContact").append(farmerContact+"\n");    
            $("#farmerDetailsContact").append(formattedFarmerContact);
        } else {
            $("#farmerDetailsContact").append(farmer.result[0].Market.contact);
        }
        $("#farmerDetailsDay").append(farmer.result[0].Market.opening_day);
        $("#farmerDetailsHours").append(farmer.result[0].Market.openinghours);

        // $('#farmerDetailsID').val($.urlParam("id"));

        var latlong = farmer.result[0].Market.latitude +"," + farmer.result[0].Market.longitude;
        $('#googlemapdir').attr('href','http://maps.google.com?q='+latlong);

    });


});