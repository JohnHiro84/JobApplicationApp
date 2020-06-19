class RaceGenderVeteran < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :race, :string, default: ""
    add_column :applications, :gender, :string, default: ""
    add_column :applications, :veteran, :string, default: ""
  end
end
