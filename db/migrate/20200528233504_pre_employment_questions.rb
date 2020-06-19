class PreEmploymentQuestions < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :undergrad_institution, :text, default: ""
    add_column :applications, :undergrad_major, :text, default: ""
    add_column :applications, :undergrad_gpa, :text, default: ""
    add_column :applications, :undergrad_major_gpa, :text, default: ""
    add_column :applications, :grad_institution, :text, default: ""
    add_column :applications, :grad_major, :text, default: ""
    add_column :applications, :grad_gpa, :text, default: ""
    add_column :applications, :explain_interest, :text, default: ""
    add_column :applications, :referred_by, :text, default: ""
    add_column :applications, :relocate, :text, default: ""

  end
end
