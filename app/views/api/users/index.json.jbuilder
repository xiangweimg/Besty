# carts = []
# json.users do
    @users.each do |user|
        json.set! user.id do
            carts.concat(user.cartitems) #if user.cartitems.count > 0
                json.set! user.id do
                    json.extract! user, :id, :email, :username
                end
        json.carts do
            user.cartitems.each do |cart|
                json.set! cart.id do
                    json.extract! cart, :id, :product_id, :buyer_id, :quantity
                    json.price cart.product.price
                    json.product cart.product.
                    json.img cart.product.photo.url
                    json.store cart.product.store.store_name
                    json.stock cart.product.availability
                end
            end
        end
        end
    end    
# end    
