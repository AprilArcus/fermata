module Api
  class LoopsController < ApiController

    def create
      loop = current_user.loops.new(loop_params)
      if loop.save
        render json: loop
      else
        render json: loop.errors, status: :unprocessable_entity
      end
    end

    def update
      loop = current_user.loops.find(params[:id])
      if loop.update_attributes(loop_params)
        render json: loop
      else
        render json: loop.errors, status: :unprocessable_entity
      end
    end

    def destroy
      loop = current_user.loops.find(params[:id])
      loop.try(:destroy) #maybe loop.destroy! ?
      render json: loop
    end

    private
    def loop_params
      params.require(:loop).permit(:title, :color, :time_slices)
    end

  end
end