# == Schema Information
#
# Table name: loops
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  time_slices :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#  title       :string(255)      not null
#  key         :string(255)      not null
#  mode        :string(255)      not null
#  instrument  :integer          not null
#  color       :string(255)      not null
#

class Loop < ActiveRecord::Base
  validates :title, presence: {message: 'Your loop needs a title!'}
  validates :author_id, :time_slices, presence: true

  belongs_to :author, class_name: 'User'
  has_many :measure_loops

end
