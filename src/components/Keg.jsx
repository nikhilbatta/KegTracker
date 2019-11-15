import React from 'React';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <h2>{props.brand}</h2>
      <h2>{props.price}</h2>
      <h4>{props.alcContent}</h4>
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