class AddVerseTables < ActiveRecord::Migration
  def change
    create_table :measure_loops do |t|
      t.integer 'measure_id', null: false
      t.integer 'loop_id', null: false
      t.integer 'instrument', null: false
      t.integer 'ord', null: false
      t.timestamps
    end

    create_table :measures do |t|
      t.integer 'verse_id', null: false
      t.string 'key', null: false
      t.string 'mode', null: false
      t.integer 'ord', null: false
      t.timestamps
    end

    create_table :verses do |t|
      t.integer 'author_id', null: false
      t.string 'title', null: false
      t.timestamps
    end
    add_index :verses, 'author_id'

  end
end
