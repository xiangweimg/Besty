json.user do
  json.extract! @user, :id, :email, :username, :created_at, :updated_at
end

json.carts do
  @user.cartitems.each do |cart|
    json.set! cart.id do
      json.extract! cart, :id, :product_id, :buyer_id, :quantity
    end
  end
end
