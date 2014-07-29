module Api
  class LoopsController < ApiController

    def show
      loop = current_user.loops.find(params[:id])
      if loop
        render json: loop
      else
        render json: {}, status: :not_found
      end
    end

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
        render json: loop.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      loop = current_user.loops.find(params[:id])
      loop.try(:destroy) #maybe loop.destroy! ?
      render json: loop
    end

    private
    def loop_params
      params.require(:loop).permit(:title,
                                   :color,
                                   :time_slices,
                                   :key,
                                   :mode,
                                   :instrument)
    end

  end
end