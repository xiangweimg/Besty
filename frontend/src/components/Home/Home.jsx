import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from "../../store/product";
import {getProducts} from '../../store/product'
import ProductIndexItem from './ProductIndexItem'
import "./Home.css"


function Home() {
    const dispatch = useDispatch()
    const products = useSelector(getProducts)
    const productList =  products.map(product => <ProductIndexItem key={product.id} product={product}></ProductIndexItem>)

    useEffect(() =>{
        dispatch(fetchProducts())
    },[dispatch])
    
    return(
        <div style={{width: "100%"}}>
            <div className="home-header">
                <br />
                <h1>Fresh finds fit for cozy season.</h1>
            </div>
        <div className="home">
            <div style={{width: '100%'}}>
                <div className="home-products-wrapper">
                    <div style={{width: '100%'}}>
                        <h3 >Recently viewed & more</h3>
                    </div>
                    <ul className="home-products">
                    <br />
                <br />
                    {productList}
                </ul>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Home