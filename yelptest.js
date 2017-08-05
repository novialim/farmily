'use strict';

const yelp = require('yelp-fusion');


const token = yelp.accessToken("z2UQxENYU2tfHC8qDBhNFg", "pkvMp9YG30GnouqQEspkge3YKp1h5f05ZnzzQGA35ImfV7reXfQy0qEt0fNIPS7P").then(response => {
    console.log(response.jsonBody.access_token);

    const client = yelp.client(response.jsonBody.access_token);

    client.search({
        term:'Farmers Market',
        location: 'San Diego, ca',
        limit:50
    }).then(response => {
        console.log(response.jsonBody.businesses.length);
    }).catch(e => {
        console.log(e);
    });

}).catch(e => {
    console.log(e);
});

