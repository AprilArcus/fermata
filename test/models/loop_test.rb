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

require 'test_helper'

class LoopTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
