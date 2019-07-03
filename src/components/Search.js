import React from 'react';
import {connect} from 'react-redux';
import {setCity} from '../actions/city';
import { resetState } from '../actions/city';
import {thunkRestaurants} from '../actions/restaurant';
import '../styles/Summary.css';
 
const Search = (props) => {
  console.log('Search comp props', props);
  return (
    <div className='content-container content'>
      <div className='page-header'>
        <h2 className="page-header__title">Select your city for restaurants</h2>
      </div>
     
      <div className='button-container'>
        {
          props.city.map((item, index)=>{
            return <button key={index} 
              onClick={(e)=>{
              console.log(e.target.innerText);
              props.dispatch(resetState());
              props.dispatch(setCity(e.target.innerText));
              props.dispatch(thunkRestaurants(e.target.innerText, 1));
              props.history.push('/listing');
            }} >{item}</button>
          })
        }
      </div>
    </div>
  )
}

Search.defaultProps={
  city: ['Toronto', 'Montreal', 'Ottawa', 'Vancouver']
}

export default connect()(Search);