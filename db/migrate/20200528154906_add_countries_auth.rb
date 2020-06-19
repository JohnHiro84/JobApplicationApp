class AddCountriesAuth < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :authorized, :string, default: ""
    add_column :applications, :countries_authorized, :string, default: ""

  end
end
