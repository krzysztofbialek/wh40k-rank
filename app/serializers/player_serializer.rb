class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :league_id, :nick, :city

  embed :ids, include: true
end
