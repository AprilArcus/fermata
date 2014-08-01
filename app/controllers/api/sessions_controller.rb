module Api
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:session])

      if @user
        sign_in!(@user)
        render json: {current_user_id: current_user.id}
      else
        render json: {}, status: :bad_request
      end
    end

    def destroy
      sign_out!
      render json: {}
    end
  end
end