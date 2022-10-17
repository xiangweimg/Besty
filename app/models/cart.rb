# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  buyer_id   :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    validates :buyer_id, :product_id, presence: true
    
    belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: :User

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

end
