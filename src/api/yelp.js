import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
        'Bearer r5tyIzkTVXXTicCufpGbJoWaoQsvNHdGyh7TL1_3sWmX-UqGQIrVn1M56ekaXpkddmnrOlMvPWIjiXY0LasNWxipTVDL3RzD_HbBsd7BvAq6PHafpOycsszppLOuX3Yx'
    }
});