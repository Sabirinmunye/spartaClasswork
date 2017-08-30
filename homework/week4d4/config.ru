require 'sinatra'
require 'sinatra/reloader' if development?
require_relative './routesAndController/controller/blogController.rb'

use Rack::Reloader

use Rack::MethodOverride

run BlogController