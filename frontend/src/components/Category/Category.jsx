import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchCategory, getCategory } from "../../store/category"
import CategoryItemList from './CategoryItemList'
import { useEffect } from "react"
import "./Category.css"

function Category() {
  const dispatch = useDispatch()
  const {categoryId} = useParams()
  const sessionUser = useSelector(state => state.session.user) //currentuser
  let message = "Fresh finds fit for you"
  if(sessionUser){
      message= `Welcome back, ${sessionUser.username}!`
  }
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
        <div className="category-top-container">
          <div className="category-top">
             <h1>
              {message}
              <span>All {category.name}</span>
              </h1>
          </div>
        </div>
      <div className="category-wrapper">
        <div className="category-all">
          <ul className="category-products">
            {productList}
          </ul>
        </div>
      </div>
    </div>
    )
  }
  
  export default Category