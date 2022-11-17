import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProducts } from "../../store/product"
import CategoryItemList from './CategoryItemList'
import "./Category.css"

function Category() {
  const products = useSelector(getProducts)
  const category = useParams()
  const productList =  products.map(product =>{
    if (product.category === category) {
      console.log(product);
      return <CategoryItemList key={product.id} product={product}></CategoryItemList>
    } 
  })


    return (
      <div className="cart-wrapper">
      <div className="cart">
        <ul>
          {productList}
        </ul>
      </div>
      </div>
    )
  }
  
  export default Category