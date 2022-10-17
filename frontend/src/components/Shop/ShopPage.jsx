import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShop, fetchShop } from '../../store/shop';
import './ShopPage.css'

const ShopPage = () => {
    const dispatch = useDispatch();
    const {shopId} = useParams(); 
    const shop = useSelector(getShop(shopId))


    useEffect(()=>{
        dispatch(fetchShop(shopId))
    },[shopId]);

    if(shop){
        return (
            <div className='shop-container'>
                <div className='shop-name'>
                    { shop.storeName }
                </div>
                <p className='shop-city'>{ shop.city }</p>
                <p className='shop-state'>{ shop.state }</p>
                <p className='shop-city'>Rating: { shop.rating }</p>
                <p>Description: { shop.description }</p>
                <Link to={`/users/${shop.ownerId}`}>{shop.owner}</Link>
            </div>
        )
    }
}

export default ShopPage