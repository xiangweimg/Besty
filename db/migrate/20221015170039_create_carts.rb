class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.references :buyer, null: false, foreign_key:{to_table: :users}
      t.references :product, null: false, foreign_key:{to_table: :products}
      t.integer :quantity, null: false, default: 0
      t.timestamps
    end
  end
end
