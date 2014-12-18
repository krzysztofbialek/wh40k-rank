class Tournament < ActiveRecord::Base
  self.inheritance_column = nil

  validates_presence_of :name, :city, :start


end
