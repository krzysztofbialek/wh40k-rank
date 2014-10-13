class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name

  embed :ids, include: true
end
