# json.user do
  json.extract! @user, :id, :email, :username, :created_at, :updated_at
# end

json.carts do
  @user.cartitems.each do |cart|
    json.set! cart.id do
      json.extract! cart, :id, :product_id, :buyer_id, :quantity
      json.price cart.product.price
      json.product cart.product.product_name
      json.img cart.product.photo.url
      json.store_name cart.product.store.store_name
      json.store_id cart.product.store.id
      json.stock cart.product.availability
    end
  end
end
