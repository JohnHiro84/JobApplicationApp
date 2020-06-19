class AddValidationColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :part_one_validated, :boolean, default: false
    add_column :applications, :part_two_validated, :boolean, default: false
    add_column :applications, :part_three_validated, :boolean, default: false
    add_column :applications, :part_four_validated, :boolean, default: false
    add_column :applications, :part_five_validated, :boolean, default: false
    add_column :applications, :part_six_validated, :boolean, default: false
    add_column :applications, :part_seven_validated, :boolean, default: false
    add_column :applications, :part_eight_validated, :boolean, default: false
    add_column :applications, :part_nine_validated, :boolean, default: false

  end
end
