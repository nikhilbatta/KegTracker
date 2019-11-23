// import React from 'React';
import PropTypes from 'prop-types';
import React, { useState } from 'react';


// class Keg extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       edit:
//     }
//   }
// }
function Keg(props){

  const [edit, setEdit] = useState(false);

    var kegStyler = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'
    }
    function styleByPintsAvailable(){
      var stylerVariable = "black"
      if(props.pintsAvailable <= 120){
        stylerVariable = "red"
      }
      var pintStyle = {
      backgroundColor: stylerVariable
        }
    return pintStyle;
    }

    function handleButtonClick(){
      props.handleSoldPint(props.index)

    }
    function handleDeleteClick(){
      props.onDelete(props.index)
    }
    const kegInformation =  <div style={styleByPintsAvailable()}  className="card">
    Name: <h3> {props.name}</h3>
    Brand: <h2>{props.brand}</h2>
    Price:<h2> {props.price}</h2>
    Alcohol Content:<h4> {props.alcContent}</h4>
    <div >
    Pints Available:  <h4>{props.pintsAvailable}</h4>
    </div>
    <button onClick={handleButtonClick}> I just sold!</button>


  </div>
  const [name, setName] = useState("");
    if(props.currentRouterPath == "/admin"){
      if(edit) {
        return (
          
          <div>
        <input type="text"  onChange={e => setName(e.target.value)} defaultValue={props.name}></input>
        <button onClick={this.save}>Save</button>
      </div>
        )
      }
      return (
        <div>
          {kegInformation}
          <button onClick={handleDeleteClick}>Delete only for Admin</button>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )
    } else {


  return(
   <div className="card">
     {kegInformation}
   </div>
  );
}
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcContent: PropTypes.string,
  pintsAvailable: PropTypes.number
};
export default Keg;