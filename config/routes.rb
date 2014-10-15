Rails.application.routes.draw do

  get 'tournaments/index'

  root "dashboard#index"

  resources :players
  resources :tournaments
end
