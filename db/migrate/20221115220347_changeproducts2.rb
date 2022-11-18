class Changeproducts2 < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :category, :string
    add_reference :products, :category, index: true
    add_foreign_key :products, :categories
  end
end
