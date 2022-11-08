import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import "./App.css"
import ProductShow from "./components/Product/ProductShow";
import ShopPage from "./components/Shop/ShopPage";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/users";


function App() {

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // },[])

  return (
    <div className="app">
    <Switch>
      <Route path='/cart'>
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

      <Route path='/'>
        <Navigation className='navigation'/>
        <Home/>
      </Route>

      
    </Switch>
    </div>

  );
}

export default App;