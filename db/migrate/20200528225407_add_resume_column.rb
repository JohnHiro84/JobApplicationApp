class AddResumeColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :resume_file, :string, default: ""
  end
end
