Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resources :products, only: [:index, :show]
    resources :likes, only: [:index]
    resources :stores, only: [:show]
    resources :categories, only: [:show]
    resources :cart_items, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:show, :index, :create, :destroy, :update]
    resource :session, only: [:show, :create, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
