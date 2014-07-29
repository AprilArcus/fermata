# == Schema Information
#
# Table name: measures
#
#  id           :integer          not null, primary key
#  verse_id     :integer          not null
#  ord          :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#  scale_degree :integer          not null
#

class Measure < ActiveRecord::Base

  validates :verse, :ord, :scale_degree, presence: true
  validate :max_measures_per_verse
  validate :no_duplicates

  belongs_to :verse
  has_many :measure_loops, dependent: :destroy

  def max_measures_per_verse
    verse.measures.count <= 4
  end

  def no_duplicates
    ords = verse.measures.pluck(:ord)
    ords.uniq.length == ords.length
  end

end
