module Api
  class MeasuresController < ApiController

    def update
      measure = Measure.find(params[:id])
      if measure.update_attributes(measure_params)
        render json: measure
      else
        render json: measure.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    private
    def verse_params
      params.require(:measure).permit(:scale_degree)
    end

  end
end