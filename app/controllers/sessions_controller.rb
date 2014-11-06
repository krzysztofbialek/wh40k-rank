class SessionsController < ApplicationController
  respond_to :json, :js
  skip_before_filter :verify_authenticity_token

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password]) 
      login_user(user)
      head :ok
    else
      head :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    head :ok
  end

  def check_if_logged_in
    if logged_in?
      render json: current_user
    else
      head :unprocessable_entity
    end 
  end
end
