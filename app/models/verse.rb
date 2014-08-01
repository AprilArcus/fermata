# == Schema Information
#
# Table name: verses
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#  key        :string(255)      not null
#  mode       :string(255)      not null
#

class Verse < ActiveRecord::Base
  before_validation :create_measures
  validates :title, presence: {message: 'Your verse needs a title!'}
  validates :author, :key, :mode, presence: true

  has_many :measures, inverse_of: :verse, dependent: :destroy
  belongs_to :author, class_name: 'User'

  def create_measures
    (4 - measures.count).times do |i|
      self.measures.build(scale_degree: 0, ord: i)
    end
  end

end
