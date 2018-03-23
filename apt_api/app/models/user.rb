class User < ActiveRecord::Base
  rolify
  has_secure_password
  has_many :reviews
  after_create :assign_role

  validates :password, length: { minimum: 6 }

  def assign_role
    add_role(:viewer)
  end
end
