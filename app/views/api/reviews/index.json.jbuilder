@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :content, :rating,:reviewer_id,:product_id
        json.reviewer review.reviewer.username
    end
end