# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :todos
      post "user_token" => "user_token#create"
    end
  end

  root "react_app#index"
end
