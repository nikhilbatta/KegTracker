import React from 'react';
import PropTypes from 'prop-types'


function Newkeg(props){
    let _name = null;
    let _brand = null;
    let _price = null;
    let _alcContent = null;
    let _pintsAvailable = null;

    function handleSubmit(event) {
        event.preventDefault();
        props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcContent: _alcContent.value, pints: parseInt(_pintsAvailable.value)})

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
export default Newkeg;