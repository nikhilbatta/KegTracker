import React from 'React';
import PropTypes from 'prop-types';

// class Keg extends React.Component {
//     state = {

//     }
// }
function Keg(props){
    var kegStyler = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'
    }
  return(
    <div style={kegStyler} className="container">
      Name: <h3> {props.name}</h3>
      Brand: <h2>{props.brand}</h2>
      Price:<h2> {props.price}</h2>
      Alcohol Content:<h4> {props.alcContent}</h4>
      Pints Available:  <h4>{props.pintsAvailable}</h4>
      <button> I just sold!</button>
      
      
    </div>
  );
    
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcContent: PropTypes.string,
  pintsAvailable: PropTypes.number
};
export default Keg;