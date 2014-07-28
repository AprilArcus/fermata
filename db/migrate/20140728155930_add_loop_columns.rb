class AddLoopColumns < ActiveRecord::Migration
  def change
    change_table :loops do |t|
      t.string :key, null: false
      t.string :mode, null: false
      t.integer :instrument, null: false
      t.string :color, null: false
    end
  end
end
