import React from 'react';
import PropTypes from 'prop-types';
import { throws } from 'assert';
import KegFeed from './KegFeed';
import Newkeg from './Newkeg'

class NewKegControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addedKeg: false
        };
        this.displayAllKegs = this.displayAllKegs.bind(this)
    }
  displayAllKegs(){
      this.setState({addedKeg: true});
  }
  render(){
      let currentContent = null;
      if(this.state.addedKeg){
         currentContent = <KegFeed/>
      }
      else{
        currentContent = <Newkeg onNewKegCreation = {this.props.onNewKegCreation}/>
      }
      return (
          <div>
              {currentContent}
          </div>
      )
  }
}
NewKegControl.propTypes = {
    onNewKegCreation: PropTypes.func
};
export default NewKegControl;