# frozen_string_literal: true

class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: ENV["USERNAME"], password: ENV["PASSWORD"] if Rails.env.production?
end
