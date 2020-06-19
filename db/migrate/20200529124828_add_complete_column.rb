class AddCompleteColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :application_complete, :boolean, default: false

  end
end
