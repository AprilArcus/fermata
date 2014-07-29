module Api
  class MeasureLoopsController < ApiController

    def create
      measure_loop = {} # need to attach to a measure in backbone and
      if measure_loop.save   # parse it out here?
        render json: measure_loop
      else
        render json: measure_loop.errors, status: :unprocessable_entity
      end
    end

    def update
      measure_loop = MeasureLoop.find(params[:id])
      if measure_loop.measure.verse.author != current_user
        render json: {}, status: :forbidden
      elsif measure_loop.update_attributes(measure_loop_params)
        render json: measure_loop
      else
        render json: measure_loop.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    def destroy
      measure_loop = MeasureLoop.find(params[:id])
      if measure_loop.measure.verse.author != current_user
        render json: {}, status: :forbidden
      else
        measure_loop.try(:destroy) #maybe verse.destroy! ?
        render json: measure_loop
      end
    end

    private
    def measure_loop_params
      params.require(:measure_loop).permit(:measure_id,
                                           :loop_id,
                                           :instrument,
                                           :ord)
    end

  end
end