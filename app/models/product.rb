# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  description  :text             not null
#  price        :float            not null
#  category     :string           not null
#  availability :integer          not null
#  seller_id    :bigint           not null
#  store_id     :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
    validates :product_name, :description, :price, :category, 
    :availability, :seller_id, presence: true

    belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

    belongs_to :store,
    foreign_key: :store_id,
    class_name: :Store

    has_many :likes, as: :likable

    has_many :in_cart,
    foreign_key: :product_id,
    class_name: :Cart

    has_one_attached :photo

end
