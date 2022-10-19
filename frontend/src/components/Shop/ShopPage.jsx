import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShop, fetchShop } from '../../store/shop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SendIcon from '@mui/icons-material/Send';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ShopProductList from './ShopProductList'
import StorefrontIcon from '@mui/icons-material/Storefront';
import './ShopPage.css'

const ShopPage = () => {
    const dispatch = useDispatch();
    const {shopId} = useParams(); 
    const shop = useSelector(getShop(shopId))
    let productList
    if (shop){
        productList = shop.products.map(product=><ShopProductList product={product}/>)
    }

    useEffect(()=>{
        dispatch(fetchShop(shopId))
    },[shopId]);

    if(shop){
        return (
        <div className='shop-main'>
            <div className='shop-header-img'>
                <img src="frontend/src/img/2749398.jpg" alt="" />
            </div>
                <div className='shop-container'>
                        <div className='shop-info'>
                            <div className='shop-store-info'>
                                <div id="shop-head-icon">
                                    <StorefrontIcon sx={{ fontSize: 100 }}/>
                                </div>
                                <div className='shop-nav-left'>
                                    <div className='shop-name'>
                                        { shop.storeName }
                                    </div>
                                    <p className='shop-description'>{ shop.description }</p>
                                    <p className='shop-city'>{ shop.city }, { shop.state }</p>
                                    <p className='shop-sales'>{ shop.sales } Sales</p>
                                    <p className='shop-city'>Rating: { shop.rating }</p>
                                </div>
                            </div>
                            <div className="shop-icons">
                                <div className='shop-icon'><LocalShippingIcon color="secondary" /><span>Smooth shipping</span>Has a history of shipping on time with tracking.</div>
                                <div className='shop-icon'><SendIcon color="secondary" /> <span>Speedy replies</span>Has a history of replying to messages quickly.</div>
                                <div className='shop-icon'><ReviewsIcon color="secondary" /><span>Rave reviews</span>Average review rating is 4.8 or higher</div>
                            </div>
                            <div>
                                <Link id="seller" to={`/users/${shop.ownerId}`}>{shop.owner}</Link>
                            </div>
                        </div>
            </div>

            <div className='shop-products'>
                <h2>All Items</h2>
                <hr />
                <ul>
                    {productList}
                </ul>
            </div>
        </div>
        )
    }
}

export default ShopPage