import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Home from "./components/Home/Home"
import Checkout from './components/Cart/Checkout'
import "./App.css"

function App() {
  return (
    <div className="app">
    <Switch>
      <Route path='/checkout'>
          <Navigation />
          <Checkout/>
      </Route>
      <Route path='/'>
      <Navigation className='navigation'/>
      </Route>
    </Switch>
    </div>

  );
}

export default App;