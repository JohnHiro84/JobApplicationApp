class DisabillitySignatureDate < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :disability, :string, default: ""
    add_column :applications, :signature, :string, default: ""
    add_column :applications, :date, :string, default: ""
  end
end
