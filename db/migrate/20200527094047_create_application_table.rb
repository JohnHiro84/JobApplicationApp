class CreateApplicationTable < ActiveRecord::Migration[5.0]
  def change
    create_table :applications do |t|
      t.integer :user_id, null: false
      t.string :first_name
      t.string :last_name
      t.string :middle_name
      t.string :suffix
      t.string :country
      t.string :address_line1
      t.string :address_line2
      t.string :city
      t.string :state_location
      t.integer :postal_code
      t.string :contact_method
      t.string :primary_phone
      t.string :secondary_phone
      t.string :email
      t.timestamps
    end
  end
end
