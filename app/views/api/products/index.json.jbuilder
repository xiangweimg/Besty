@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :product_name, :seller_id, :price, 
        :category, :availability, :description, :store_id
        json.store_name product.store.store_name
        json.photoUrl product.photo.url
    end
end