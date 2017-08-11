$(document).ready(function() {
    function populateReviewPage(vendor, id) {
        let vendor_name =  vendor[0].vendor_name
        $('#farmerName').append(vendor_name)
        $('.review-side-panel').append(vendor_name)
        $('#farmerAddress').append(vendor[0].Market.address_txt)
        if (vendor[0].vendor_contact !== "") {
            var vendorContact = vendor[0].vendor_contact;
            var formattedVendorContact = "(" + vendorContact.slice(0, 3) + ") " + vendorContact.slice(3, 6) + "-" + vendorContact.slice(6, 10);
        }
        vendor[0].vendor_contact ? $('#farmerContact').append(formattedVendorContact) : $('#farmerContact').append(vendor[0].Market.contact)
        $('.vendor_id').attr("value", id);
        $('.uid').attr("value", sessionStorage.getItem("displayName"))
    }


    function populateReviewspanel(vendor, id){
        if( vendor.length > 0){
            vendor.forEach((elem)=>{
                $('.farmerReviews').append("" +
                    "<p class=\"reviewtxt\">" +
                    `${elem.review_text}....<i>${elem.user_name}</i>`+
                    "</p>"+
                    "<div class=\"divider updownpad\"></div>\n")
            })
        }else{
            $('.farmerReviews').append("" +
                "<p class=\"reviewtxt\">" +
                `<i>Be the first one</i>`+
                "</p>"+
                "<div class=\"divider updownpad\"></div>\n")
        }

    }


    $.urlParam = function(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        } else {
            return decodeURI(results[1]) || 0;
        }
    }

    $.get("../api/viewfarmer/" + $.urlParam("id"), function(farmer) {
        populateReviewPage(farmer.result, $.urlParam("id"))
    });

    $.get("../api/viewreview/" + $.urlParam("id"), function(farmer) {
        populateReviewspanel(farmer.result, $.urlParam("id"))
    });
});
