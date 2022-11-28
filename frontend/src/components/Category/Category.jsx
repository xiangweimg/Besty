import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchCategory, getCategory } from "../../store/category"
import CategoryItemList from './CategoryItemList'
import { useEffect } from "react"
import "./Category.css"
import HomeBar from "../Home/HomeBar"

function Category() {
  const dispatch = useDispatch()
  const {categoryId} = useParams()

  useEffect(()=>{
    dispatch(fetchCategory(categoryId))
  },[categoryId]);//state add category
  
  const category =  useSelector(getCategory)
  let products
  if(category.products){
     products = Object.values(category.products)
  }
  let productList
  if(products){
    productList =  products.map(product => <CategoryItemList key={product.id} product={product}></CategoryItemList>)
  }
    
  return (
    <div>
        <div className="category-top">
          <HomeBar/>
        </div>
      <div className="category-wrapper">
        <div className="category-all">
          <p>Category: {category.name}</p>
          <ul className="category-products">
            {productList}
          </ul>
        </div>
      </div>
    </div>
    )
  }
  
  export default Category