class SessionsController < ApplicationController
  respond_to :json, :js

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
end
