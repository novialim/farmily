$(document).ready(function(){
    function populateReviewPage(vendor){
        console.log(vendor)
        $('#farmerName').append(vendor[0].vendor_name)
        $('#farmerAddress').append(vendor[0].Market.address_txt)
        console.log("->",vendor[0].vendor_contact)
        vendor[0].vendor_contact ?  $('#farmerContact').append(vendor[0].vendor_contact) : $('#farmerContact').append(vendor[0].Market.contact)




    }
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
            return null;
        }
        else{
            return decodeURI(results[1]) || 0;
        }
    }

    $.get( "../api/viewfarmer/"+$.urlParam("id"), function( farmer ) {

        populateReviewPage(farmer.result)
    });

});