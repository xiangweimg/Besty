# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  buyer_id   :bigint           not null
#  product_id :bigint           not null
#  quantity   :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :buyer_id, :product_id, :quantity, null: false
    
    belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: :User

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
