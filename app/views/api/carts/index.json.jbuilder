@carts.each do |cart|
    json.set! cart.id do
        json.extract! cart, :buyer_id, :product_id
        json.product cart.product.product_name
        json.store cart.product.store.store_name
        json.photoUrl cart.photo.url
    end
end

