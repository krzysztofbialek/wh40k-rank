Rails.application.routes.draw do

  pots '/login', 'sessions#create'
  delete '/loggout', 'sessions#destroy'

  get 'sessions/destroy'

  get 'tournaments/index'

  root "dashboard#index"

  resources :players
  resources :tournaments
end
