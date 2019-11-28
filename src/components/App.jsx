import React from 'react';
import KegFeed from './KegFeed';
import Header from './Header';
import Homepage from './Homepage';
import Newkeg from './Newkeg';
import NewKegControl from './NewKegControl'
import About from './About';
import { Switch, Route, withRouter } from 'react-router-dom';
import Admin from './Admin'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor(props){
        super(props);
        console.log(props.masterKegList)
        this.state = {
            backgroundColor: "black"
        };
        // this.addBeer = this.addBeer.bind(this);
        this.handleSoldPint = this.handleSoldPint.bind(this);
        // this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
        this.updateKeg = this.updateKeg.bind(this);
    }
    updateKeg(i, name, brand, price, alcContent){
        var copyOfMaster = this.state.masterKegList;
        copyOfMaster[i].name = name;
        copyOfMaster[i].brand = brand;
        copyOfMaster[i].price = price;
        copyOfMaster[i].alcContent = alcContent;
        this.setState({masterKegList: copyOfMaster});
    }
    // handleDeleteKeg(i){
    //     console.log(i)
    //     var newMasterKegList = this.state.masterKegList
    //     newMasterKegList.splice(i,1)
    //     console.log("new master ", newMasterKegList)
    //     this.setState({masterKegList : newMasterKegList})
    // }
    handleSoldPint(i){
        var copyOfMaster = this.props.masterKegList.slice();
        
        copyOfMaster[i].pintsAvailable --
        if(copyOfMaster[i].pintsAvailable == 120){
            let newColor = "red"
            this.setState({backgroundColor: newColor})
        }
        this.setState({masterKegList: copyOfMaster })
    }
    // addBeer(newKeg){
    //     console.log(newKeg)
    //     var newKegList = this.state.masterKegList.slice();
    //     newKegList.push(newKeg);
    //     this.setState({masterKegList: newKegList})
    // }
    render(){
        return (
            <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/allkegs' render={() => <KegFeed kegFeed={this.props.masterKegList} handleSoldPint={this.handleSoldPint}  />} />
        <Route exact path = '/aboutus' component={About} />
        <Route exact path = '/newkeg' render={() => <NewKegControl onNewKegCreation={this.addBeer} />}/>
        <Route exact path = '/admin' render={(props) => <Admin masterKegList={this.props.masterKegList} currentRouterPath={props.location.pathname} onDelete={this.handleDeleteKeg} updateKeg={this.updateKeg} />} />
      </Switch>
    </div>
        )
    }
}
App.propTypes = {
    masterKegList: PropTypes.array
}
const mapStateToProps = state => {
    return {
      masterKegList: state
    }
  }
export default withRouter(connect(mapStateToProps)(App));