class CreateTournaments < ActiveRecord::Migration
  def change
    create_table :tournaments do |t|
      t.string :name
      t.string :type
      t.string :city
      t.datetime :start

      t.timestamps
    end
  end
end
