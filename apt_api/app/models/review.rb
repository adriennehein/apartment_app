class Review < ApplicationRecord
  belongs_to :user
  validates :user, presence: true

  resourcify
end
