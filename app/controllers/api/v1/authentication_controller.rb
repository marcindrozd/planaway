module Api
  module V1
    class AuthenticationController < ::Api::V1::BaseController
      skip_before_action :verify_authenticity_token
      skip_before_action :authenticate_request

      def create
        command = AuthenticateUser.call(params[:email], params[:password])

        if command.success?
          render json: { auth_token: command.result }
        else
          render json: { error: command.errors }, status: :unauthorized
        end
      end
    end
  end
end
