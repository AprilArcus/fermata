class AddTitleToLoop < ActiveRecord::Migration
  def change
    change_table :loops do |t|
      t.string :title, null: false
    end
  end
end
