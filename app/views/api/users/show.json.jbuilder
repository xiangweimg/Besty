  json.extract! @user, :id, :email, :username, :created_at, :updated_at

  json.carts @user.cartitems.each do |cart|
    cart.product.each do |product|
      json.extract! product, :product_name
    end
  end
