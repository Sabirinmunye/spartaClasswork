class VideosController < Sinatra::Base

$videos = [{
			id: 0,
			title: "smokey eye",
			content: "first video",
			url:  "dF_iBT4KgvM"  
		},
		{
			id:  1,
			title: "glitter eye",
			content: "this is the second video",
			url:  "w3p3dBhQYko" 
		},
		{
			id: 2,
			title: "cut crease",
			content: "this is the third video",
			url: "lYE9PRz1lVg" 
		},
		{
			id: 3,
			title: "green smokey",
			content: "this is the fourth video",
			url: "U47bhjRPxEU" 
		},
		{
			id: 4 ,
			title: "highlight&contour",
			content: "this is the fifth video",
			url:"svbc4IIlUt0" 

		}]
	#sets root as the parent-directory of the current file
	set :root, File.join(File.dirname(__FILE__), '..')

	#set the view directory correctly
	set :views, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
end

	get '/' do 
		@video = $videos
		erb :'videos/index'

	end

	get '/new' do

		erb :'videos/new'
		
	end

	get '/:id' do
		"SHOW: #{params[:id]}"
		id = params[:id].to_i
		@video = $videos[id]
		erb :'videos/show'

		

	end
	
	post '/' do
		id= $videos.length
		new_video = {
			id: id,
			title: params[:title],
			content: params[:content],
			url: params[:url]
		}
		$videos.push new_video
		redirect "/"

	end


	put '/:id' do
		
	end

	delete '/:id' do
		"DELETE: #{params[:id]}"
	end

	get '/:id/edit' do
	
	"EDIT: #{params[:id]}"
	end
 
end