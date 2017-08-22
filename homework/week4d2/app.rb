require 'sinatra'
require 'sinatra/reloader' if development?

get '/blog' do 
	"index"
end

get '/blog/new' do
"create a new form for my pic"
end

post '/blog' do
"make a new pic my g"
end

get '/blog/7' do
	"go make that specific pic my g"
end

get '/blog/7/edit' do
	'go make me my form so i can edit my pic my g'
end