class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.string :category, null: false
      t.integer :availability, null: false
      t.references :seller, null: false, foreign_key: {to_table: :users}
      t.references :store, null: false, foreign_key: {to_table: :stores}
      t.timestamps
    end
  end
end
