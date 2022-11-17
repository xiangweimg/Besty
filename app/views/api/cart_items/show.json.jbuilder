json.carts do
    json.set! @cart.id do
        json.extract! @cart, :id, :buyer_id, :product_id, :quantity
        json.price @cart.product.price
        json.product @cart.product.product_name
        json.img @cart.product.photo.url
        json.store_id @cart.product.store.id
        json.store_name @cart.product.store.store_name
    end
end
json.products do
    @cart.buyer.buyer_items.each do |product|
        json.set! product.id do 
            json.extract! product, :id, :product_name, :seller_id, :price, 
            :category_id, :availability, :description, :store_id
            if product.photo.attached?
                json.img product.photo.url
            end
        end
    end
end
json.store @cart.product.store.store_name

