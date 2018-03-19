class Apartment < ApplicationRecord
  validates :apt_name, presence: true
end
