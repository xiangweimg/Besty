json.carts do
    @carts.each do |cart|
        json.set! cart.id do
            json.extract! cart, :id, :buyer_id, :product_id, :quantity
            json.product @cart.product.product_name
            json.price @cart.product.price
        end
    end
end

if @current_user
    json.products do
        @current_user.buyer_items.each do |product|
            json.set! product.id do 
                json.extract! product, :id, :product_name, :seller_id, :price, 
                :category, :availability, :description, :store_id
                if product.photo.attached?
                    json.img product.photo.url
                end
            end
        end
    end
end

