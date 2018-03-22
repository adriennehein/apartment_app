class CreateApartments < ActiveRecord::Migration[5.1]
  def change
    create_table :apartments do |t|
      t.string :apt_name
      t.string :street1
      t.string :street2
      t.string :city
      t.string :zip
      t.string :state
      t.string :country
      t.string :owner_name
      t.string :phone
      t.text :contact_hours

      t.timestamps
    end
  end
end
