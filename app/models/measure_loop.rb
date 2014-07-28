# == Schema Information
#
# Table name: measure_loops
#
#  id         :integer          not null, primary key
#  measure_id :integer          not null
#  loop_id    :integer          not null
#  instrument :integer          not null
#  ord        :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class MeasureLoop < ActiveRecord::Base

  validates :measure, :loop, :instrument, :ord, presence: true

  belongs_to :measure
  belongs_to :loop

end
