# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


apartment_attributes = [
  {
    apt_name: 'Vintage Golden Hill',
    street1: '30th and B St',
    street2: '',
    city: 'San Diego',
    zip: '92102',
    state: 'CA',
    country: 'USA',
    owner_name: 'Michael McMichaelson',
    phone: '1234567890',
    contact_hours: 'Monday-Friday 8am-5pm'
  },
  {
    apt_name: 'North Park',
    street1: '20 Cockroach Ln',
    street2: '',
    city: 'San Diego',
    zip: '92104',
    state: 'CA',
    country: 'USA',
    owner_name: 'Greg Gregson',
    phone: '0987654321',
    contact_hours: 'Saturday and Sunday 1a-2pm'
  }
]

apartment_attributes.each do |attributes|
  Apartment.create(attributes)
end
