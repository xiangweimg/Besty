# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :bigint           not null
#  product_id  :bigint           not null
#  review      :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates :reviewer_id, :product_id, :review, :rating, presence: true

    belongs_to :reviewer,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
