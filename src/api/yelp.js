import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Lc5Gu_yOSWTSbZAQLAN7eME295nErGtc0Mw2bSBgtr66FvpIR3EV_iSSmGaCvR1Z8Ye5bQBHcIQpKZBxTY5gxq0C4DqDr0P61V6zpZTBJDHswKhPsoI5rlcUFX__X3Yx'
    }
});
