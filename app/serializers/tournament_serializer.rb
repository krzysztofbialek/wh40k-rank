class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :start, :type

  embed :ids, include: true

  def start
    object.start.strftime("%d-%m-%Y")
  end
end
