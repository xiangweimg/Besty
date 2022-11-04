import { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, fetchProduct } from '../../store/product';
import './Review.css'

const ReviewShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId))
    const sessionUser = useSelector(state => state.session.user);
    const [review, setReview] = useState("No reviews yet")

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[productId]);

    const handleSubmit = () =>{
        
    }

    if(product){
        return (
        <div className='reviews-wrapper'>
            <div className='reviews'>
                <div className='review-header'>
                    <h1>0 Reviews</h1>
                </div>
                <div className='product-reviews'>
                    Reviews for this item
                </div>
                <br />
                <span></span>
                <div>
                    <form onSubmit={handleSubmit}>
                        <textarea cols="30" rows="10"
                            value={review}
                            onChange={(e)=> setReview(e.target.value)}></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>

        )
    }
}

export default ReviewShow