require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it "should validate name" do
    apartment = Apartment.create
    expect(apartment.errors[:apt_name]).to_not be_empty
  end
end
