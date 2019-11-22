import React from 'React';
import PropTypes from 'prop-types';

function Keg(props){
  console.log("keg" + props.pintsAvailable)
    var kegStyler = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'
    }
    var pintStyle = {
      backgroundColor: props.backgroundColor
    }
    function handleButtonClick(){
      props.handleSoldPint(props.index)
    }
  return(
    <div style={kegStyler} className="container">
      Name: <h3> {props.name}</h3>
      Brand: <h2>{props.brand}</h2>
      Price:<h2> {props.price}</h2>
      Alcohol Content:<h4> {props.alcContent}</h4>
      <div style={pintStyle}>
      Pints Available:  <h4>{props.pintsAvailable}</h4>
      </div>
      <button onClick={handleButtonClick}> I just sold!</button>
      
      
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