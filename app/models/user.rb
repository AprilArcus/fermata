# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#  email           :string(255)      not null
#

class User < ActiveRecord::Base

  after_initialize :reset_session_token

  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true

  has_many :loops, foreign_key: 'author_id', dependent: :destroy
  has_many :verses, foreign_key: 'author_id', dependent: :destroy
  has_many :measures, through: :verses
  has_many :measure_loops, through: :measures

  def gravatar_url
    "http://www.gravatar.com/avatar/#{ Digest::MD5.hexdigest(email) }?s=360"
  end

  def password
    BCrypt::Password.new(self.password_digest)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
  end

  def reset_session_token!
    self.reset_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email])
    return user if user.password == user_params[:password]
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

end
