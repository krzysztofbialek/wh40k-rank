class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :league_id
      t.string :first_name
      t.string :nick
      t.string :last_name
      t.string :city

      t.timestamps
    end
  end
end
