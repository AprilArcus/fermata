class CreateLoops < ActiveRecord::Migration
  def change
    create_table :loops do |t|
      t.integer :author_id, null: false
      t.text :json, null: false
      t.timestamps
    end
    add_index :loops, :author_id
  end
end
