import React from 'react';
import KegFeed from './KegFeed';
import Header from './Header';
import Homepage from './Homepage';
import Newkeg from './Newkeg';
import NewKegControl from './NewKegControl'
import About from './About';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            masterKegList: []
        };
        this.addBeer = this.addBeer.bind(this);
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
        <Route exact path='/allkegs' render={() => <KegFeed kegFeed={this.state.masterKegList} />} />
        <Route exact path = '/aboutus' component={About} />
        <Route exact path = '/newkeg' render={() => <NewKegControl onNewKegCreation={this.addBeer} />}/>
      </Switch>
    </div>
        )
    }
}
export default App;