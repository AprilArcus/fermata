class Loop < ActiveRecord::Base

  validates :author_id, :json, presence: true

  belongs_to :author, class_name: 'User'

end
