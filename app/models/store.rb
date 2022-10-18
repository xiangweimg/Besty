# == Schema Information
#
# Table name: stores
#
#  id          :bigint           not null, primary key
#  store_name  :string           not null
#  city        :string           not null
#  state       :string           not null
#  description :text             not null
#  sales       :integer          default(0)
#  rating      :integer          default(0)
#  owner_id    :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Store < ApplicationRecord
    validates :store_name, :city, :state, :description, :sales, :rating,
    :owner_id, presence: true

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    has_many :products,
    foreign_key: :store_id,
    class_name: :Product,
    dependent: :destroy 

    has_many :likes, as: :likable

    has_one_attached :photo
end
