Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  get '/logged_in', to: 'sessions#check_if_logged_in'
  delete '/logout', to: 'sessions#destroy'

  get 'sessions/destroy'

  get 'tournaments/index'

  root "dashboard#index"

  resources :players
  resources :tournaments
end
