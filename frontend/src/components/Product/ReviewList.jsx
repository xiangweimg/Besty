import "./ReviewList.css"
import seller_logo from '../../img/seller_logo.png'
import { useDispatch, useSelector } from "react-redux"
import { removeReview } from "../../store/reviews"

const ReviewList=({review, handleEdit, setNotice})=>{
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    let id
    if (sessionUser){
        id = sessionUser.id
    }else{
        id = ""
    }
    const handleDelete = e =>{
        e.preventDefault()
        dispatch(removeReview(review.id))
        setNotice(false)
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
                   {id === review.reviewerId &&
                    <div>
                        <button className="review-remove-button" onClick={handleDelete}>Delete</button>
                        <button className="review-edit-button" onClick={event => handleEdit(review)}>Edit</button>
                    </div>
                   } 
                </div>
        </li>
    )
}

export default ReviewList