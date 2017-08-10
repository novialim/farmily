$(document).ready(function(){
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
        console.log(farmer.result);
        console.log(farmer.result[0].Market.address_txt);
        $(".farmerName").append(farmer.result[0].vendor_name);
        $("#farmerAddress").append(farmer.result[0].Market.address_txt);
        $("#farmerContact").append(farmer.result[0].Market.contact);
        
    });

});