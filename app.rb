require 'sinatra'

set :layout, "layout"
set :public_folder, 'public'

get "/" do
  erb :index
end

STEPS = 4

(1..STEPS).each do |i|
  get "/#{i}" do
    @step = i
    erb :"#{i}"
  end
end
