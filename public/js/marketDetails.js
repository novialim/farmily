function displayMarketVendors(vendorsArr) {
    // Populate vendor section
    $('#vendors').empty();
    for (let i = 0; i < vendorsArr.length; i++) {
        let vendor = vendorsArr[i];

        // Vendor image div
        let vendorImg = $('<div>').addClass('card-image');
        vendorImg.append($('<img>').attr('src', `images/farmer${vendor.vendor_id}.jpg`));
        vendorImg.append($('<span>').addClass('card-title').text(vendor.vendor_name));

        // Vendor text div
        let vendorText = $('<div>').addClass('card-content');
        vendorText.append($('<p>').text(vendor.vendor_text));

        // Vendor link
        let vendorLink = $('<div>').addClass('card-action');
        vendorLink.append($('<a>').attr('href', '/farmer?id=' + vendor.vendor_id).text('MORE INFO'));

        // Start new row if index is even
        if (i % 2 === 0) {
            // Create row div                
            let row = $('<div>').addClass('row')
                .append($('<div>').addClass('col s12 m6')
                    .append($('<div>').addClass('card medium')
                        .append(vendorImg, vendorText, vendorLink)));

            $('#vendors').append(row);
        }

        // Add to bottom row if index is odd
        else {
            let elem = $('#vendors').children().last();
            elem.append($('<div>').addClass('col s12 m6')
                .append($('<div>').addClass('card medium')
                    .append(vendorImg, vendorText, vendorLink)));
        }
    }
}
