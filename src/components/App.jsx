import React from 'react';
import KegFeed from './KegFeed';
import Header from './Header';
import Homepage from './Homepage';
import Newkeg from './Newkeg';
import NewKegControl from './NewKegControl'
import About from './About';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin'
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            masterKegList: [],
            backgroundColor: "black"
        };
        this.addBeer = this.addBeer.bind(this);
        this.handleSoldPint = this.handleSoldPint.bind(this);
    }
    handleSoldPint(i){
        var copyOfMaster = this.state.masterKegList.slice();
        copyOfMaster[i].pints --
        if(copyOfMaster[i].pints == 120){
            let newColor = "red"
            this.setState({backgroundColor: newColor})
        }
        this.setState({masterKegList: copyOfMaster })
    }
    addBeer(newKeg){
        var newKegList = this.state.masterKegList.slice();
        newKegList.push(newKeg);
        this.setState({masterKegList: newKegList})
    }
    render(){
        return (
            <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/allkegs' render={() => <KegFeed kegFeed={this.state.masterKegList} handleSoldPint={this.handleSoldPint} backgroundColor={this.state.backgroundColor} />} />
        <Route exact path = '/aboutus' component={About} />
        <Route exact path = '/newkeg' render={() => <NewKegControl onNewKegCreation={this.addBeer} />}/>
        <Route exact path = '/admin' render={(props) => <Admin masterKegList={this.state.masterKegList} currentRouterPath={props.location.pathname} />} />
      </Switch>
    </div>
        )
    }
}
export default App;