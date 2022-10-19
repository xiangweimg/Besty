import { useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, fetchProduct } from '../../store/product';
import './Review.css'

const ReviewShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId))
    const sessionUser = useSelector(state => state.session.user);

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[productId]);


    if(product){
        return (
        <div className='reviews-wrapper'>
            <div className='reviews'>
                <div className='review-header'>
                    <h1>4049 Reviews</h1>
                </div>
                <div className='product-reviews'>
                    Reviews for this item
                </div>
                <span>1111</span>
            </div>
        </div>

        )
    }
}

export default ReviewShow