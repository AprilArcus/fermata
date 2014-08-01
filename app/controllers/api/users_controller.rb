module Api
  class UsersController < ApplicationController

    def create
      @user = User.new(user_params)

      if @user.save
        sign_in!(@user)
        render :show
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    def show
      require_signed_in!
      @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: {}, status: :not_found
      end
    end

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end

  end
end