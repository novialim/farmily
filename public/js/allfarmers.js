function populateData(data){
    data.map((farmer)=>{
        $(".populate-farmer").append("<div class=\"col s12 m6\">\n" +
            "<div class=\"card horizontal\">\n" +
            "<div class=\"card-image\">\n" +
            "<img src=\"images/farmer"+farmer.vendor_id+".jpg\">\n" +
            "</div>\n" +
            "<div class=\"card-stacked\">\n" +
            "<div class=\"card-content farmercard\">\n" +
            `<h5>${farmer.vendor_name}</h5>\n` +
            `<p>${farmer.vendor_text}</p>\n` +
            "</div>\n" +
            "<div class=\"card-action\">\n" +
            "<a href=\'/farmer/"+farmer.vendor_id+"\'>Find out more</a>\n" +
            "</div>\n" +
            "</div>\n" +
            "</div>\n" +
            "</div>\n")
    })
}

// <button class="btn teal waves-effect waves-light" id="reviewFarmer" type="submit" name="action">Start Review </button>

function populateDataReview(data){
    data.map((farmer)=>{
        $(".populate-farmer-review").append(
            `<a href="/write/${farmer.vendor_id}">`+
            "<div class=\"col s6 m3\">\n" +
            "<div class=\"card small\">\n" +
            "<div class=\"card-image\">\n" +
            `<img class=\"darken-image\" src=\"images/farmer${farmer.vendor_id}.jpg\">\n` +
            `<span class=\"card-title\"><strong>${farmer.vendor_name}</strong></span>\n` +
            "</div>\n" +
            "<div class=\"card-content minborder\">\n" +
            `<p>${farmer.vendor_text}</p>\n` +
            "</div>\n" +
            "<div class=\"card-action\">\n" +
            "<div class=\"rateyo\"></div>\n" +
            "</div>\n" +
            "</div>\n" +
            "</div></a>")

    })

    

    $(".rateyo").rateYo({
                    rating: 3.5
                });



    
}


$(document).ready(function(){
    $.get( "../api/viewfarmer/", function( farmer ) {
        populateData(farmer.result);
        populateDataReview(farmer.result);
    });
});

