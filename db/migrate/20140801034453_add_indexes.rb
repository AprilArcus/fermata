class AddIndexes < ActiveRecord::Migration
  def change
    add_index :measure_loops, :measure_id
    add_index :measure_loops, :loop_id
    add_index :measures, :verse_id
    add_index :loops, [:author_id, :title]
  end
end
