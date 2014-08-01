Rails.application.routes.draw do
  root to: 'static_pages#root'

  # resources :users, only: [:new, :create]
  # resource :session

  namespace :api, defaults: {format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show]
    resources :loops, only: [:show, :create, :update, :destroy]
    resources :verses, only: [:show, :create, :update, :destroy]
    resources :measures, only: [:show] if Rails.env.development?
    resources :measures, only: [:update]
    resources :measure_loops, only: [:show] if Rails.env.development?
    resources :measure_loops, only: [:create, :update, :destroy]
  end
end
