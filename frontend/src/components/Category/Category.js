import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchCategory, getCategory } from "../../store/category"
import CategoryItemList from './CategoryItemList'
import { useEffect } from "react"
import "./Category.css"

function Category() {
  const dispatch = useDispatch()
  const {categoryId} = useParams()

  useEffect(()=>{
    dispatch(fetchCategory(categoryId))
  },[categoryId, dispatch]);//state add category
  
  const category =  useSelector(getCategory)
  console.log(category.products);
  let products
  if(category.products){
     products = Object.values(category.products)
  }
  let productList
  if(products){
    productList =  products.map(product => <CategoryItemList key={product.id} product={product}></CategoryItemList>)
  }
    
  return (
      <div className="category-wrapper">
        <div className="home-header">
          <br />
          <h1>{category.name}</h1>
        </div>
        <div className="category-all">
          <ul className="category-products">
            {productList}
          </ul>
        </div>
      </div>
    )
  }
  
  export default Category