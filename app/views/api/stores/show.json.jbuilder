  json.extract! @shop, :id, :store_name, :city, :state, :description,
  :sales, :rating, :owner_id

  json.owner @shop.owner.username
  json.products @shop.products.each do |product|
    json.extract! product, :product_name, :id
    json.img product.photo.url
  end
