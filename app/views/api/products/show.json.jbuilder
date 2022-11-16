json.extract! @product, :id, :product_name, :seller_id, :price, 
:category_id, :availability, :description, :store_id

json.store_name @product.store.store_name
json.store_sales @product.store.sales
json.img @product.photo.url

json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :product_id, :reviewer_id, :content, :rating, :created_at
            json.reviewer review.reviewer.username
        end
    end
end
