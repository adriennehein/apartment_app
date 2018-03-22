class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :rating
      t.string :comment
      t.string :location
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
