import React from 'react';

function Newkeg(){
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
        <form style={formStyle}>
            <div class="form-group">
          <input
            type='text'
            id='name'
            placeholder='Name of the keg'/>
            </div>
            <div className="form-group">
          <input
            type='text'
            id='brand'
            placeholder='Brand of the keg'/>
            </div>
            <div className="form-group">
          <input
            id='price'
            placeholder='Price per pint.'/>
            </div>
            <div className="form-group">
            <input
             id='alcContent'
             placeholder='alcohol content for the keg'/>
             </div>
          <button type='submit'>New Keg Way!</button>
        </form>
      </div>
    )
}
export default Newkeg;