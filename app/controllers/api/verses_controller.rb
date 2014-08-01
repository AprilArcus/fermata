module Api
  class VersesController < ApiController

    def show
      @verse = current_user.verses.find(params[:id])
      if @verse
        render :show
      else
        render json: {}, status: :not_found
      end
    end

    def create
      # easiest way to get these deeply nested objects into backbone is
      # to generate a template on the server
      Verse.transaction do
        begin
          @verse = current_user.verses.create(title: 'untitled', key: 'C', mode: 'MAJOR')
          render json: {id: @verse.id}
        rescue
          render json: @verse.errors, status: :unprocessable_entity
        end
      end
    end

    def update
      verse = current_user.verses.find(params[:id])
      if verse.update_attributes(verse_params)
        render json: verse
      else
        render json: verse.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    def destroy
      verse = current_user.verses.find(params[:id])
      verse.try(:destroy)
      render json: verse
    end

    private
    def verse_params
      params.require(:verse).permit(:key, :mode)
    end

  end
end