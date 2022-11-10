import {  useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/product';
import { createReview } from '../../store/reviews';
import './Review.css'

const ReviewShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams(); 
    const product = useSelector(getProduct(productId))
    const sessionUser = useSelector(state => state.session.user);
    const [content, setReview] = useState("")
    const [rating, setRating] = useState(0)


    const handleSubmit = (e) =>{
        e.preventDefault()
        let review = {
            content: content,
            rating: rating,
            productId: productId,
            reviewerId: sessionUser.id
        }
        dispatch(createReview(review))
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
                        <textarea cols="50"rows="10" 
                            value={content}
                            onChange={(e)=> setReview(e.target.value)}></textarea>
                        <br />
                        Rating:  
                       <label for="rating1"> 1
                        <input type="radio" id="rating1" name="rating" value="1"
                         onChange={(e) => {
                            setRating(1);
                          }}/>
                       </label>
                       <label for="rating2">2
                        <input type="radio" id="rating2" name="rating" value="2"
                        onChange={(e) => {
                        setRating(2);
                        }}/>
                       </label>
                       <label for="rating3">3
                        <input type="radio" id="rating3" name="rating" value="3"
                        onChange={(e) => {
                        setRating(3);
                        }}/>
                       </label>
                       <label for="rating4">4
                        <input type="radio" id="rating4" name="rating" value="4"
                        onChange={(e) => {
                        setRating(4);
                        }}/>
                       </label>
                       <label for="rating5">5
                        <input type="radio" id="rating5" name="rating" value="5"
                        onChange={(e) => {
                        setRating(5);
                        }}/>
                       </label>
                       <br/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>

        )
    }
}

export default ReviewShow