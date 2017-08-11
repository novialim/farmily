const yelp = require('yelp-fusion');
const YELP_TOKEN = 'q9ldndMa5N13LwNksXrDhs4o7-SCPOC8el-mOaG_QjKTQfO5M5rdakH-XhcHzDMpF1D10Lefns2pRR_v_mX67BbTBwGzEiuMrYBfworQcTPzOuymFbbhlhuw8QwtWXYx';

// Initialize yelp client
const client = yelp.client(YELP_TOKEN);


module.exports.getYelpData = (yelp_id, id, cb)=>{
    client.business(yelp_id).then(response => {
        let market =  response.jsonBody;
        let photos =  market.photos;
        if(photos.length ===0){
            for(let i = 0; i <= 5; i++){
                photos.push("https://lorempixel.com/300/300/food/" + i);
            }
        }
        let data =  {
            id ,
            yelp_id,
            title: market.name,
            review_count: market.review_count,
            photos
        }
        cb(data)
    }).catch(e =>{
        cb(e)
    })

}