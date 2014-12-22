class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :start, :type, :errors

  embed :ids, include: true

  def start
    object.start.strftime("%d-%m-%Y") rescue ''
  end
end
