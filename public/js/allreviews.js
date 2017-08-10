$(document).ready(function(){
    function populateReviewPage(vendor,id){
        console.log(vendor)
        $('#farmerName').append(vendor[0].vendor_name)
        $('#farmerAddress').append(vendor[0].Market.address_txt)
        console.log("->",vendor[0].vendor_contact)
        vendor[0].vendor_contact ?  $('#farmerContact').append(vendor[0].vendor_contact) : $('#farmerContact').append(vendor[0].Market.contact)
        $('.vendor_id').attr("value", id);
        $('.uid').attr("value",sessionStorage.getItem("displayName"))
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

        populateReviewPage(farmer.result,$.urlParam("id"))
    });

});

// AFTER SUBMIT IT SHOULD GO TO MARKETDETAILS PAGE