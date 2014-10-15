class TournamentsController < ApplicationController
  def index
    render json: Tournament.order('start DESC')
  end
end
