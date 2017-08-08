function populateData(data){
    data.map((farmer)=>{
        console.log(farmer.vendor_name)
        $(".populate-farmer").append("<div class=\"col s12 m6\">\n" +
            "    <div class=\"card horizontal\">\n" +
            "    <div class=\"card-image\">\n" +
            "    <img src=\"images/farmer1.jpg\">\n" +
            "    </div>\n" +
            "    <div class=\"card-stacked\">\n" +
            "    <div class=\"card-content\">\n" +
            "    <h5>"+farmer.vendor_name+"</h5>\n" +
            "<p>"+farmer.vendor_text+"</p>\n" +
            "</div>\n" +
            "<div class=\"card-action\">\n" +
            "    <a href=\'/farmer/"+farmer.vendor_id+"\'>Find out more</a>\n" +
            "</div>\n" +
            "</div>\n" +
            "</div>\n" +
            "\n" +
            "</div>\n")
    })
}


$(document).ready(function(){
    $.get( "../api/viewfarmer/", function( farmer ) {
        populateData(farmer.result)
    });
});