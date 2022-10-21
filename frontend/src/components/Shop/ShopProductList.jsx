import { Link } from "react-router-dom"
const ShopProductList=({product})=>{

    return(
        <li>
            <Link className="shop-product-each" to={`/products/${product.id}`}>
                <span>
                    <img src={product.img} alt="" />
                    {product.productName}
                </span> 
            </Link>
        </li>
    )
}

export default ShopProductList