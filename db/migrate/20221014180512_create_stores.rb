class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.string :store_name, null: false
      t.string :city, null: false
      t.string :state, null:false
      t.text :description, null: false
      t.integer :sales, default: 0
      t.integer :rating, default: 0
      t.references :owner, null: false, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
