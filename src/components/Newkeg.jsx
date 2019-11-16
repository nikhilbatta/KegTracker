import React from 'react';

function Newkeg(){
    return (
        <div>
        <form>
          <input
            type='text'
            id='name'
            placeholder='Name of the keg'/>
          <input
            type='text'
            id='brand'
            placeholder='Brand of the keg'/>
          <input
            id='price'
            placeholder='Price per pint.'/>
            <input
             id='alcContent'
             placeholder='alcohol content for the keg'/>
          <button type='submit'>Help!</button>
        </form>
      </div>
    )
}
export default Newkeg;