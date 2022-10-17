import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from "../../store/product";
import {getProducts} from '../../store/product'
import ProductIndexItem from './ProductIndexItem'
import "./Home.css"


function Home() {
    const dispatch = useDispatch()
    const products = useSelector(getProducts)
    const productList =  products.map(product => <ProductIndexItem product={product}></ProductIndexItem>)

    useEffect(() =>{
        dispatch(fetchProducts())
    },[])
    return(
        <div className="home">
            <div className="home-header">
                <br />
                <h1>Fresh finds fit for cozy season.</h1>
            </div>
            <h3>Recently viewed & more</h3>
            <ul className="home-products">
                {productList}
            </ul>
        </div>
    )
}

export default Home