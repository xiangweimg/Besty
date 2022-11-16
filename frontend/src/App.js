import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import "./App.css"
import Category from "./components/Category/Category";
import ProductShow from "./components/Product/ProductShow";
import ShopPage from "./components/Shop/ShopPage";



function App() {

  return (
    <div className="app">
    <Switch>
      <Route exact path='/cart'>
        <Navigation />
        <Cart/>
      </Route>

      <Route exact path='/products/:productId'>
        <Navigation />
        <ProductShow/>
      </Route>

      <Route exact path='/shops/:shopId'>
        <Navigation />
        <ShopPage/>
      </Route>

      <Route exact path='/'>
        <Navigation className='navigation'/>
        <Home/>
      </Route>
      <Route exact path='/category/:category'>
        <Category/>
      </Route>

    </Switch>
    </div>

  );
}

export default App;