module Api
  class UsersController < ApiController

    def show
      @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: {}, status: :not_found
      end
    end

  end
end