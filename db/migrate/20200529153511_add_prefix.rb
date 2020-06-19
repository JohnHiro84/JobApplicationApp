class AddPrefix < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :prefix, :string, default:""

  end
end
