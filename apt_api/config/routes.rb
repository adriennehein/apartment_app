Rails.application.routes.draw do
  resources :reviews, defaults: {format: :json}
  post 'user_token' => 'user_token#create'
  resources :users, defaults: {format: :json}
  resources :apartments
  post 'apartments' => 'apartments#create'

  root 'reviews#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
