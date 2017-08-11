$(document).ready(function() {
    function populateReviewPage(vendor, id) {
        let vendor_name =  vendor[0].vendor_name
        $('#farmerName').append(vendor_name)
        $('.review-side-panel').append(vendor_name)
        $('#farmerAddress').append(vendor[0].Market.address_txt)

        // console.log("->",vendor[0].vendor_contact)
        if (vendor[0].vendor_contact !== "") {
            var vendorContact = vendor[0].vendor_contact;
            var formattedVendorContact = "(" + vendorContact.slice(0, 3) + ") " + vendorContact.slice(3, 6) + "-" + vendorContact.slice(6, 10);
        }

        vendor[0].vendor_contact ? $('#farmerContact').append(formattedVendorContact) : $('#farmerContact').append(vendor[0].Market.contact)
        $('.vendor_id').attr("value", id);
        $('.uid').attr("value", sessionStorage.getItem("displayName"))
    }


// <p class="reviewtxt">review 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ... <a href="#">read more</a></p>
//     <div class="divider updownpad"></div>
    function populateReviewspanel(vendor, id){
        vendor.forEach((elem)=>{
            $('.farmerReviews').append("" +
                "<p class=\"reviewtxt\">" +
                `${elem.review_text}....${elem.review_username}`+
                // "<a href=\"#\">read more</a></p>\n" +
                "</p>"+
                "<div class=\"divider updownpad\"></div>\n")

        })
        console.log(vendor)

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

// AFTER SUBMIT IT SHOULD GO TO MARKETDETAILS PAGE