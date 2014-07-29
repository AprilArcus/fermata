module Api
  class MeasuresController < ApiController

    def show
      @measure = current_user.measures.find(params[:id])
      if @measure
        render :show
      else
        render json: {}, status: :not_found
      end
    end

    def update
      measure = current_user.measures.find(params[:id])
      if measure.update_attributes(measure_params)
        render json: measure
      else
        render json: measure.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    private
    def measure_params
      params.require(:measure).permit(:scale_degree)
    end

  end
end