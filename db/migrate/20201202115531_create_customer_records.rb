class CreateCustomerRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :customer_records do |t|
      t.datetime :record_dt
      t.string :procedure
      t.string :name
      t.string :inst
      t.string :phone_number
      t.string :price
      t.timestamps
    end
  end
end
