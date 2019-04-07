# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :todos
      post "authenticate", to: "authentication#create"
    end
  end

  root "react_app#index"
end
