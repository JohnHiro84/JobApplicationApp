class AddEmailToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :email, :string
    add_column :users, :password_digest, :string
    add_column :users, :session_token, :string
    add_index :users, :session_token
  end
end
