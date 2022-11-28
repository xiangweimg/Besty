import React, { useEffect } from 'react'
import Fuse from 'fuse.js'
import { fetchProducts, getProducts } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchItems from './SearchItems';
import HomeBar from '../Home/HomeBar';
import "./SearchPage.css"

export default function SearchPage() {
   const dispatch = useDispatch()
   const location = useLocation()
    useEffect(() => {
       dispatch(fetchProducts())
   }, [])
   
    const products = useSelector(getProducts)
   
    const options = {
        includeScore: true,
        keys: ['productName', 'category'],
        useExtendedSearch:true,
      }
      const fuse = new Fuse(products, options)
      const results = fuse.search(`${location.state.content}`) 
    const productList =  results.map(result => <SearchItems key={result.item.id} product={result}></SearchItems>)
  return (
    <div className='search-wrapper'>
            <HomeBar/>
        <div className='search-result'>
            <div className='search-result-amount'>{results.length} results</div>
            <ul className="search-products">
                {productList}
            </ul>
        </div>
    </div>
  )
}
