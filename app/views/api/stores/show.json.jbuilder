  json.extract! @shop, :id, :store_name, :city, :state, :description,
  :sales, :rating, :owner_id

  json.owner @shop.owner.username