class CreateJobOffers < ActiveRecord::Migration[7.0]
  def change
    create_table :job_offers do |t|
      t.string :user_name
      t.string :email
      t.string :user_number
      t.timestamps
    end
  end
end
