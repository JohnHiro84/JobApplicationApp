class AddResumeText < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :resume_text, :text, default: ""
  end
end
