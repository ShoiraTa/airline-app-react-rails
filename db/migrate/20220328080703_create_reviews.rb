class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.integer :score
      t.string :description
      t.belongs_to :airline, null: false, foreign_key: true

      t.timestamps
    end
  end
end
