// import React from 'React';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';


// class Keg extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       edit:
//     }
//   }
// }
function Keg(props){
console.log(props.updateKeg)
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(props.name);

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
    function saveEditInformation(){
      setEdit(false);
      console.log(name);
      console.log("it got here")
    }
    useEffect(() => {
      if(props.currentRouterPath == '/admin'){
        console.log(props.updateKeg)
        props.updateKeg(props.index, name)
      }
      
    }, [name])

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
  
    if(props.currentRouterPath == "/admin"){
      if(edit) {
        
        return (
          
          <div>
            <button onClick={() => setEdit(!edit)}>Save</button>
        <input type="text"  onChange={e => setName(e.target.value)} defaultValue={props.name}></input>
        
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