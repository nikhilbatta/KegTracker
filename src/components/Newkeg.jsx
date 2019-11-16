import React from 'react';

function Newkeg(){
    return (
        <div className="container">
        <form>
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
          <button type='submit'>Help!</button>
        </form>
      </div>
    )
}
export default Newkeg;