class AddDescriptionToRecipes < ActiveRecord::Migration[5.0]
    def change
      add_column :recipes, :description, :string
      t.boolean :is_true, default: true

    end

end
