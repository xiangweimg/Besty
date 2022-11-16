import "./ReviewList.css"
import seller_logo from '../../img/seller_logo.png'
import { useDispatch } from "react-redux"
import { removeReview } from "../../store/reviews"

const ReviewList=({review})=>{
    const dispatch = useDispatch()
    const handleClick = e =>{
        e.preventDefault()
        dispatch(removeReview(review.id))
    }
    return(
        <li>
                <span>Rating: {review.rating}</span>
                <span className="review-content">{review.content}</span> 
                <div className="review-author">
                    <span id="review-logo">
                        <img src={seller_logo} alt="" />
                    </span>
                    <span>{review.reviewer} {review.createdAt}</span>
                <button onClick={handleClick}>Delete</button>
                </div>
        </li>
    )
}

export default ReviewList