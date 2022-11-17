json.extract! @review,  :id, :content, :rating,:reviewer_id,:product_id, :created_at
json.reviewer @review.reviewer.username
