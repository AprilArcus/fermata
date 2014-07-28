class TweakVerses < ActiveRecord::Migration
  def change

    remove_column :measures, :key
    remove_column :measures, :mode

    change_table :verses do |t|
      t.string :key, null: false
      t.string :mode, null: false
    end

    change_table :measures do |t|
      t.integer :scale_degree, null: false
    end

  end
end
