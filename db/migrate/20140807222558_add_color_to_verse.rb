class AddColorToVerse < ActiveRecord::Migration
  def change
    change_table :verses do |t|
      t.string :color, null: false
    end
  end
end
