require 'sinatra'
require 'sinatra/reloader' if development?
require_relative './rootsAndControllers/controllers/videos_controller.rb'

run VideosController
