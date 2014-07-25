class ChangeJsoNtoTimeSlices < ActiveRecord::Migration
  def change
    rename_column :loops, :json, :time_slices
  end
end
