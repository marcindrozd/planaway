# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :todos
      post "authenticate", to: "authentication#create"
    end
  end

  get :omniauth_callback, to: 'omniauth#callback'

  root "react_app#index"
end
