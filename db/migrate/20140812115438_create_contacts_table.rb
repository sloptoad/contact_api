class CreateContactsTable < ActiveRecord::Migration
  def change
    create_table :contacts do |c|
      c.string :first_name
      c.string :last_name
      c.string :phone_number
      c.string :email
      c.timestamps
    end
  end
end