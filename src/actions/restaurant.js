import { setError } from "./error";

const API_KEY =`196898180284cf47e9bf3a6e1b3d4f68`;

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchRestaurants=(restaurant) =>({
    type: 'FETCH_RESTAURANTS',
    restaurant
})

export const thunkRestaurants =(city='', start=1) =>{
    return (dispatch, getState) =>{
        fetch(`https://developers.zomato.com/api/v2.1/cities?q=${city}&apikey=${API_KEY}`)
        .then(handleErrors)
        .then(res => res.json())
        .then((data) =>{
            const cityId = data.location_suggestions[0].id;
            return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&start=${start}&count=5&sort=rating&order=desc&apikey=${API_KEY}`)
            .then(handleErrors)
            .then(res => res.json() )
            .then((data) => {
                console.log(data.restaurants);
                data.restaurants.forEach((restaurant) =>{
                    const res_id = restaurant.restaurant.id;
                    fetch(`https://developers.zomato.com/api/v2.1/reviews?res_id=${res_id}&apikey=${API_KEY}`)
                    .then(handleErrors)
                    .then(res => res.json())
                    dispatch(fetchRestaurants(restaurant));
                })
            })
            .catch((error)=>{
                dispatch(setError('problem in accessing restaurant list through API. '+error));
            })
        })
        .catch((error)=>{
            console.log(error);
            dispatch(setError('problem in accessing API initially.'+ error));
        })
        
    }

}