class AddForeignKey < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :products, :stores, column: :store_id
  end
  add_index :products, :store_id
end
