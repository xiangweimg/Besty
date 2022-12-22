import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from "../../store/product";
import {getProducts} from '../../store/product'
import ProductIndexItem from './ProductIndexItem'
import HomeBar from "./HomeBar";
import _ from "underscore";
import ContactForm from "../Contact/Contact";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "./Home.css"


function Home() {
    const dispatch = useDispatch()
    const products = useSelector(getProducts)
    const productList = _.sample(products, 10).map(product => <ProductIndexItem key={product.id} product={product}></ProductIndexItem>)

    useEffect(() =>{
        dispatch(fetchProducts())
    },[])
    
    return(
        <div style={{width: "100%"}}>
        <div className="home-bar-wrapper">
            <HomeBar/>
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
            <div className="footer">
                <h2>What is Besty?</h2>
                <ul>
                    <li>A full-stack e-commerce website based on Etsy built in a short period of time.</li>
                    <li>Implemented a number of features, including search, product listings, shopping cart, and shop profiles.</li>
                    <li>Implemented Ruby on Rails with PostgreSQL database as backend and React as frontend.</li>
                </ul>
                <h2>Contact</h2>
                <div>
                    <ContactForm/>
                </div>
                <h2>Developed by: Ivy Liu&nbsp;
                    <span>
                        <a href="https://www.linkedin.com/in/xiangwei0816/" target="_blank"><LinkedInIcon/></a>
                        <a href="https://github.com/xiangweimg" target="_blank"><GitHubIcon/></a>
                        <a href="https://xiangweimg.github.io/PersonalPage/" target="_blank"><AccountBoxIcon/></a>
                    </span>
                </h2>
            </div>
        </div>

    )
}

export default Home