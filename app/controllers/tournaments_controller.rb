class TournamentsController < ApplicationController
  require 'base64'
  require 'csv'

  respond_to :js

  def index
    render json: Tournament.order('start DESC')
  end

  def create
    @tournament = Tournament.create(tournament_params)

    if @tournament.valid? 
      render json: @tournament
    else
      render json: {errors: @tournament.errors}, status: 422
    end
    #   # CSV.parse(params["tournament"]["attachment"], headers: true) do |row|
    #   #   puts row
    #   # end
    #   render json: tournament, status: 422
    #   #render_validation_errors tournament.errors
    # end
  end

  private

  def render_validation_errors errors
    puts errors.to_h
    render json: {errors: errors.to_h}, status: 422
  end

  def tournament_params
    params.require(:tournament).permit(:name, :city, :attachment, :type, :start)
  end

end
