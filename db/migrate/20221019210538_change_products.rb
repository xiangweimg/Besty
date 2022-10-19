class ChangeProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :store_id, :bigint, null: false
  end
end
