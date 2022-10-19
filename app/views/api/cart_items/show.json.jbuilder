json.carts do
    json.set! @cart.id do
        json.extract! @cart, :id, :buyer_id, :product_id, :quantity
    end
end
json.products do
    @cart.buyer.buyer_items.each do |product|
        json.set! product.id do 
            json.extract! product, :id, :product_name, :seller_id, :price, 
            :category, :availability, :description, :store_id
            if product.photo.attached?
                json.img product.photo.url
            end
        end
    end
end
json.store @cart.product.store.store_name

