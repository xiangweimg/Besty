@reviews.each do |review|
    json.set! review.id do
        json.extract! product, :id, :product_id, :reviewer_id, :review, :rating
        # json.store_name product.store.store_name
        # json.store_sales product.store.sales
        # json.img product.photo.url
    end
end