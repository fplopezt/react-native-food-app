import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default (id) => {
    const [restaurant, setRestaurant] = useState(null);

    const restaurantApi = async (restaurantId) => {
        try {
            const response = await yelp.get(`/${restaurantId}`);
            setRestaurant(response.data);
        } catch (e) {
            console.log('Something went wrong!')
        }
    }

    useEffect(() => {
        restaurantApi(id);
    }, [])

    return [restaurantApi, restaurant];
}
