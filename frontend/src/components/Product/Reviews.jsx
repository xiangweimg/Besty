import {  useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/product';
import { findReviews,updateReview, createReview } from '../../store/reviews';
import ReviewList from './ReviewList';
import LoginFormModal from '../LoginFormModal/Modal';
import ReviewModal from './ReviewModal';
import './Review.css'

const ReviewShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId))
    if(!product.reviews){
        product.reviews = {}
    }
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews);
    const review_arr = Object.values(reviews)
    const [content, setContent] = useState("")
    const [rating, setRating] = useState("")
    const [allowEdit, setAllowEdit] = useState(false)    
    const [review, setReview] = useState("")

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
    }, [productId, product.reviews])

    
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(content === ""){
            return alert("Please enter content")
        }else if(rating === ""){
            return alert("Please choose rating")
        }
        if(allowEdit){
            let reviewToEdit = {
                id: review.id,
                content: content,
                rating: rating,
                productId: productId,
                reviewerId: sessionUser.id
            }
            dispatch(updateReview(reviewToEdit))
            setAllowEdit(false)
            setContent("")
            setRating("")
        }else{
            if(review_arr.some(review =>review.reviewerId === sessionUser.id)){
                return alert("Only one comment allowed")
            }else{
                let reviewToSubmit = {
                    content: content,
                    rating: rating,
                    productId: productId,
                    reviewerId: sessionUser.id
                }
                dispatch(createReview(reviewToSubmit))
                setContent("")
                setRating("")
            }
            }
        }
    const handleEdit = e =>{
        setContent(e.content)
        setRating(e.rating)
        setAllowEdit(true)
        setReview(e)
    }
    const reviewList = Object.values(reviews).map(review => <ReviewList key={review.id} review={review} handleEdit={handleEdit}/>)
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
                            onChange={(e)=> setContent(e.target.value)}></textarea>
                        <br />
                        Rating:  
                       <label htmlFor="rating1"> 1
                        <input type="radio" id="rating1" name="rating" value="1"
                         onChange={(e) => {
                            setRating(1)}}
                            checked={rating === 1}/>
                       </label>
                       <label htmlFor="rating2">2
                        <input type="radio" id="rating2" name="rating" value="2"
                        onChange={(e) => {
                        setRating(2)}}
                        checked={rating === 2}/>
                       </label>
                       <label htmlFor="rating3">3
                        <input type="radio" id="rating3" name="rating" value="3"
                        onChange={(e) => {
                        setRating(3)}}
                        checked={rating === 3}/>
                       </label>
                       <label htmlFor="rating4">4
                        <input type="radio" id="rating4" name="rating" value="4"
                        onChange={(e) => {
                        setRating(4)}}
                        checked={rating === 4}/>
                       </label>
                       <label htmlFor="rating5">5
                        <input type="radio" id="rating5" name="rating" value="5"
                        onChange={(e) => {
                        setRating(5)}}
                        checked={rating === 5}/>
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