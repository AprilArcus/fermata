# == Schema Information
#
# Table name: loops
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  json       :text             not null
#  created_at :datetime
#  updated_at :datetime
#

class Loop < ActiveRecord::Base

  validates :author_id, :time_slices, presence: true

  belongs_to :author, class_name: 'User'

end
