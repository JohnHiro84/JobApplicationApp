class AddStartDate < ActiveRecord::Migration[5.0]
  def change
    add_column :applications, :start_date, :string

  end
end
