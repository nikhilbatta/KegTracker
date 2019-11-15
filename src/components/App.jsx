import React from 'react';
import KegFeed from './KegFeed';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App(){
  
  return (
    <div>
      
      <Switch>
        <KegFeed/>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;