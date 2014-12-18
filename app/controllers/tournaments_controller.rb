class TournamentsController < ApplicationController
  require 'base64'
  require 'csv'

  def index
    render json: Tournament.order('start DESC')
  end

  def create
    tournament = Tournament.new(tournament_params)

    if tournament.save
      head :ok
    else
      CSV.parse(params["tournament"]["attachment"], headers: true) do |row|
        puts row
      end
      head :unprocessable_entity
    end
  end

  private

  def tournament_params
    params.permit(:name, :city, :attachment, :type, :start)
  end

end
