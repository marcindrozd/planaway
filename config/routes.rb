# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :todos
      post "authenticate", to: "authentication#create"
    end
  end

  root "react_app#index"

  get "*path", to: "react_app#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
