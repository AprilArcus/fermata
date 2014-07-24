require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Dianthus
  class Application < Rails::Application
    # TODO: Migrate asset storage to S3
    config.assets.paths << 'app/assets/audio'
  end
end
