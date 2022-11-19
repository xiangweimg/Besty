json.extract! @category, :id, :name

json.products do
    @category.products.each do |product|
        json.set! product.id do 
            json.extract! product, :id, :product_name
            json.img product.photo.url
            json.price product.price
        end
    end
end
