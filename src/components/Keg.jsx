import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';


function Keg(props) {
  
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(props.name);
  const inputRef = React.createRef()


  
  function styleByPintsAvailable() {
    var stylerVariable = "black"
    if (props.pintsAvailable <= 120) {
      stylerVariable = "red"
    }
    var pintStyle = {
      backgroundColor: stylerVariable
    }
    return pintStyle;
  }
  function handleButtonClick() {
    props.handleSoldPint(props.index)

  }
  function handleDeleteClick() {
    props.onDelete(props.index)
  }

  const kegInformation = <div style={styleByPintsAvailable()} className="card">
    Name: <h3> {props.name}</h3>
    Brand: <h2>{props.brand}</h2>
    Price:<h2> {props.price}</h2>
    Alcohol Content:<h4> {props.alcContent}</h4>
    <div >
      Pints Available:  <h4>{props.pintsAvailable}</h4>
    </div>
    <button onClick={handleButtonClick}> I just sold!</button>
  </div>
 
 const updateQuery = () => {
  const inputText = inputRef.current.value
  setName(inputText)
  props.updateKeg(props.index, inputText)
  setEdit(false);

}
  // dont run lifecycle method unless the route is admin.
  // otherwise what happens is that if you are on non admin route props.updateKeg isnt a function, which it shouldnt be for any route except for admin.
  useEffect(() => {
    if (props.currentRouterPath == '/admin') {
      if(edit){
        console.log(props.updateKeg)
        props.updateKeg(props.index, name)
      }
      
    }

  }, [name])


  // start of what I want to render from the route, might think about refactoring to make code look cleaner, but dont really know how to yet.
  if (props.currentRouterPath == "/admin") {
    if (edit) {
      return (
        <div>
          
          <input ref={inputRef} defaultValue={props.name}></input>
          <button onClick={updateQuery}>Save</button>
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
    return (
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