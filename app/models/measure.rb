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
  validate :maxMeasuresPerVerse

  belongs_to :verse
  has_many :measure_loops

  def maxMeasuresPerVerse
    verse.measures.count <= 4
  end

  def noDuplicates
    ords = verse.measures.pluck(:ord)
    ords.uniq.length == ords.length
  end

end
