import React from 'React';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <div class="container">
      <h3>Name: {props.name}</h3>
      <h2>Brand: {props.brand}</h2>
      <h2>Price: {props.price}</h2>
      <h4>Alcohol Content: {props.alcContent}</h4>
      <hr/>
    </div>
  );
    
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcContent: PropTypes.string
};
export default Keg;