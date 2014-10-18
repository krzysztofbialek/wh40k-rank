Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  delete '/loggout', to: 'sessions#destroy'

  get 'sessions/destroy'

  get 'tournaments/index'

  root "dashboard#index"

  resources :players
  resources :tournaments
end
