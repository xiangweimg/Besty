# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token
    validates :username, length: {in: 3..30}
    validates :email, length: {in: 5..255}
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password, length: {in: 6..255}, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, format: { without: URI::MailTo::EMAIL_REGEXP, message: "can't be an email" }
    #SPIRE G
    
    has_many :products,
    foreign_key: :seller_id,
    class_name: :Product,
    dependent: :destroy 

    has_many :stores,
    foreign_key: :owner_id,
    class_name: :Store,
    dependent: :destroy 

    has_many :likes,
    foreign_key: :liker_id,
    class_name: :Like,
    dependent: :destroy 

    has_many :cartitems,
    foreign_key: :buyer_id,
    class_name: :CartItem,
    dependent: :destroy 

    has_many :buyer_items,
    through: :cartitems,
    source: :product
    
    def self.find_by_credentials(credential, password)
        if URI::MailTo::EMAIL_REGEXP.match(credential)
            user = User.find_by(email: credential)
        else
            
            user = User.find_by(username: credential)
        end

        if user&.authenticate(password)
            user 
        else
            nil
        end
    end
    
    # def password=(password) #create password_digest
    #     @password = password
    #     self.password_digest = BCrypt::Password.create(password)
    # end

    # def is_password?(password)
    #     BCrypt::Password.new(password_digest).is_password?(password)
    # end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end
private 

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def generate_unique_session_token
        while 
            session_token = SecureRandom::urlsafe_base64(16)
            return session_token unless User.exists?(session_token: session_token)
        end
    end
end
