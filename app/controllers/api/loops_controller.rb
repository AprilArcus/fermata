module Api
  class LoopsController < ApiController

    def destroy
      loop = current_user.loops.find(params[:id])
      loop.try(:destroy)
      render json: loop
    end

  end
end