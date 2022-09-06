class JobOffer < ApplicationRecord
  has_one_attached :resume
  validates_presence_of :email, :user_name, :user_number
end
