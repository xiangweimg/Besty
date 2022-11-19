import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Category from "./components/Category/Category";
import ProductShow from "./components/Product/ProductShow";
import ShopPage from "./components/Shop/ShopPage";
import EmptyCart from "./components/Cart/EmptyCart";
import CartNotice from "./components/Cart/CartNotice";
import UserPage from './components/UserPage/UserPage'
import "./App.css"



function App() {

  return (
    <div className="app">
    <Switch>
      <Route exact path='/cart'>
        <Navigation className='app-page'/>
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
      <Route exact path='/categories/:categoryId'>
        <Navigation />
        <Category/>
      </Route>
      <Route exact path='/checkout'>
        <Navigation />
        <CartNotice/>
        <EmptyCart message ='checkout'/>
      </Route>
      <Route exact path='/users/:userId'>
        <Navigation />
        <UserPage/>
      </Route>
    </Switch>
    </div>

  );
}

export default App;