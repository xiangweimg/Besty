import {  useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/product';
import { createReview } from '../../store/reviews';
import { findReviews } from '../../store/reviews';
import ReviewList from './ReviewList';
import './Review.css'
import LoginFormModal from '../LoginFormModal/Modal';

const ReviewShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId))
    if(!product.reviews){
        product.reviews = {}
    }
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews);
    const [content, setReview] = useState("")
    const [rating, setRating] = useState(0)
    let submitButton
    if(sessionUser){
        submitButton = <input id='submit-review'type="submit" value="Submit review" />

    }else{
        let message = {
            text: 'Submit review',
            type: 'submit-review-button'
        }
        submitButton =  <LoginFormModal message={message} />
    }
    useEffect(()=>{
        dispatch(findReviews(product.reviews))
    }, [productId, dispatch, product.reviews])

    const handleSubmit = (e) =>{
        e.preventDefault()
        let review = {
            content: content,
            rating: rating,
            productId: productId,
            reviewerId: sessionUser.id
        }
        dispatch(createReview(review))
        setReview("")
    }
    const reviewList = Object.values(reviews).map(review => <ReviewList key={review.id} review={review}/>)

    if(product){
        return (
        <div className='reviews-wrapper'>
            <div className='reviews'>
                <div className='review-header'>
                    <h1>{reviews.length} Reviews</h1>
                </div>
                <div className='product-reviews'>
                    <p>Reviews for this item</p> 
                    <ul>{reviewList}</ul>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <textarea cols="50"rows="10" 
                            value={content}
                            onChange={(e)=> setReview(e.target.value)}></textarea>
                        <br />
                        Rating:  
                       <label htmlFor="rating1"> 1
                        <input type="radio" id="rating1" name="rating" value="1"
                         onChange={(e) => {
                            setRating(1);
                          }}/>
                       </label>
                       <label htmlFor="rating2">2
                        <input type="radio" id="rating2" name="rating" value="2"
                        onChange={(e) => {
                        setRating(2);
                        }}/>
                       </label>
                       <label htmlFor="rating3">3
                        <input type="radio" id="rating3" name="rating" value="3"
                        onChange={(e) => {
                        setRating(3);
                        }}/>
                       </label>
                       <label htmlFor="rating4">4
                        <input type="radio" id="rating4" name="rating" value="4"
                        onChange={(e) => {
                        setRating(4);
                        }}/>
                       </label>
                       <label htmlFor="rating5">5
                        <input type="radio" id="rating5" name="rating" value="5"
                        onChange={(e) => {
                        setRating(5);
                        }}/>
                       </label>
                       <br/>
                       <div className='submit-button-container'>
                            {submitButton}
                       </div>
                    </form>
                </div>
            </div>
        </div>

        )
    }
}

export default ReviewShow