require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    send_file 'index.html'
  end
end
