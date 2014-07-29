module Api
  class MeasureLoopsController < ApiController

    def show
      @measure_loop = current_user.measure_loops.find(params[:id])
      if @measure_loop
        render :show
      else
        render json: {}, status: :not_found
      end
    end

    def create
      measure_loop = MeasureLoop.new(measure_loop_params)
      if measure_loop.update_attributes(measure_loop_params)
        render json: measure_loop
      else
        render json: measure_loop.errors, status: :unprocessable_entity
      end
    end

    def update
      @measure_loop = current_user.measure_loops.find(params[:id])
      if @measure_loop.update_attributes(measure_loop_params)
        render :show
      else
        render json: @measure_loop.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    def destroy
      measure_loop = current_user.measure_loops.find(params[:id])
      measure_loop.try(:destroy) #maybe verse.destroy! ?
      render json: measure_loop
    end

    private
    def measure_loop_params
      params.require(:measure_loop)
            .permit(:measure_id, :loop_id, :instrument, :ord)
    end

  end
end