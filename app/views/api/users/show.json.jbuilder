  json.extract! @user, :id, :email, :username, :created_at, :updated_at

  json.carts @user.cart.product
