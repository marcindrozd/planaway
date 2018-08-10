module Api
  class BaseController < ApplicationController
    include Knock::Authenticable

    before_action :authenticate_user
  end
end
