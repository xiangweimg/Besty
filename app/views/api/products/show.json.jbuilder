json.extract! @product, :id, :product_name, :seller_id, :price, 
:category, :availability, :description, :store_id

json.store_name @product.store.store_name
json.store_sales @product.store.sales
json.img @product.photo.url

json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :product_id, :reviewer_id, :content, :rating
        end
    end
end
