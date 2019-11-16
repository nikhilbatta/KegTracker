import React from 'react';
import KegFeed from './KegFeed';
import Header from './Header';
import Homepage from './Homepage';
import Newkeg from './Newkeg';
import About from './About';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App(){
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/allkegs' component={KegFeed} />
        <Route exact path = '/aboutus' component={About} />
        <Route exact path = '/newkeg' component={Newkeg} />
      </Switch>
    </div>
  );
}

export default App;