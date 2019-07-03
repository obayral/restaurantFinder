import React from 'react';
import {connect} from 'react-redux';
import '../styles/Details.css';
import '../styles/RestaurantListItem.css';



const DetailPage= (props) => {

  const restaurant=props.restaurant.restaurant;
  const photo = require('../notAvailable.png');
  return (
    <div className='content-container content'>
        {/* Restaurant details with id of {props.match.params.id} */}
        <img src={restaurant.featured_image || photo} alt='...' className='featured-image' />
        <h3 className='restaurant-name'>
          {restaurant.name} 
        </h3>
        <hr />

        <p><strong>Cuisines: </strong>{restaurant.cuisines}</p>
        <p><strong>Cost for two:  </strong> {restaurant.currency}{restaurant.average_cost_for_two}</p>
        <hr />

        <p><strong>Address:</strong></p>
        <p>{restaurant.location.address}</p>
        <hr />
    </div>
  )
}

export const mapStateToProps=(state, props) => {
    return {
        restaurant: state.restaurants.find((restaurant)=> {
            return restaurant.restaurant.id === props.match.params.id; 
            })
    }
}

export default connect(mapStateToProps)(DetailPage);