import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


function Newkeg(props){
    let _name = null;
    let _brand = null;
    let _price = null;
    let _alcContent = null;
    let _pintsAvailable = null;
    const [redirect, setRedirect] = useState(false);

    function handleSubmit(event) {
      // console.log(_name.value)
      //   event.preventDefault();
      //   props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcContent: _alcContent.value, pints: parseInt(_pintsAvailable.value)})
      const { dispatch } = props;
      event.preventDefault();
      const action = {
        type: 'ADD_TICKET',
        names: _name.value,
        brand: _brand.value,
        price: _price.value,
        alcContent: _alcContent.value,
        pintsAvailable: _pintsAvailable.value
        
      };
      dispatch(action);
      _name.value = '';
      
      setRedirect(true);

    }
    var divformStyle = {
        textAlight: 'center',
        float: 'center',
        marginLeft: '500px'
    }
    var formStyle = {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
    }
    return (
        
        <div style={divformStyle}>
          {redirect ? <Redirect to='/allkegs'/> : ''}
            <h2>Create a Keg</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
            <div className="form-group">
          <input
            type='text'
            id='name'
            placeholder='Name of the keg'
            ref={(input) => {_name = input;}}/>
            </div>
            <div className="form-group">
          <input
            type='text'
            id='brand'
            placeholder='Brand of the keg'
            ref={(input) => {_brand = input;}}/>
            </div>
            <div className="form-group">
          <input
            id='price'
            placeholder='Price per pint.'
            ref={(input) => {_price = input;}}/>
            </div>
            <div className="form-group">
            <input
             id='alcContent'
             placeholder='alcohol content for the keg'
             ref={(input) => {_alcContent = input;}}/>
             </div>
             <div className="form-group">
            <input
             id='pintsAvailable'
             placeholder='Pints available for this keg'
             ref={(input) => {_pintsAvailable = input;}}/>
             </div>
          <button type='submit'>New Keg Way!</button>
        </form>
      </div>
    )
}
Newkeg.propTypes = {
    onNewKegCreation: PropTypes.func
  };
export default connect()(Newkeg);