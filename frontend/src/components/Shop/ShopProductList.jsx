import { Link } from "react-router-dom"
const ShopProductList=({product})=>{
    const linkStyle = {
        textDecoration: "none",
      };
    return(
        <li>
            <Link style={linkStyle} to={`/products/${product.id}`}>
            <img src={product.img} alt="" />
            <span>{product.productName}</span> 
            </Link>
        </li>
    )
}

export default ShopProductList