carts = []
json.users do
    @users.each do |user|
        carts.concat(user.cartitems) #if user.cartitems.count > 0
        json.set! user.id do
            json.extract! user, :id, :email, :username
        end
    end
end

json.carts do
    carts.each do |cart|
        json.set! cart.id do
            json.extract! cart, :id, :product_id, :buyer_id, :quantity
        end
    end
end
