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

require 'test_helper'

class LoopTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
