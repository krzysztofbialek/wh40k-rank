Rails.application.routes.draw do

  root "dashboard#index"

  resources :players
  resources :tournaments
end
