$(document).ready(function() {
    function populateReviewPage(vendor, id) {
        let vendor_name = vendor[0].vendor_name
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


    function populateReviewspanel(vendor, id) {
        if (vendor.length > 0) {
            vendor.forEach((elem) => {
                $('.farmerReviews').append("" +
                    `<div class=\"rateyo\" id=\"rateYo${elem.review_id}\"></div>` +
                    "<div><p class=\"reviewtxt\">" +
                    `<i>${elem.user_name}</i> - ` +
                    `${elem.review_text}` +
                    "</p></div>" +
                    "<div class=\"divider updownpad\"></div>\n");
            })

            setRating(vendor);

        } else {
            $('.farmerReviews').append("" +
                "<p class=\"reviewtxt\">" +
                `<i>Be the first one</i>` +
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