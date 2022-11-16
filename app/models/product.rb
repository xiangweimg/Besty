# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  description  :text             not null
#  price        :float            not null
#  availability :integer          not null
#  seller_id    :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  store_id     :bigint           not null
#  category_id  :bigint           not null
#
class Product < ApplicationRecord
    validates :product_name, :description, :price, :category_id, :store_id,
    :availability, :seller_id, presence: true

    belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

    belongs_to :store,
    foreign_key: :store_id,
    class_name: :Store

    belongs_to :category,
    foreign_key: :category_id,
    class_name: :Category

    has_many :likes, as: :likable

    has_many :in_cart,
    foreign_key: :product_id,
    class_name: :CartItem,
    dependent: :destroy 

    has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review,
    dependent: :destroy 

    has_one_attached :photo

end
