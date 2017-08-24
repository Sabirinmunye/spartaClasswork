class VideosController < Sinatra::Base

$videos = [{
			id: 0,
			title: "smokey eye",
			content: "first video",
			url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dF_iBT4KgvM" frameborder="0" allowfullscreen></iframe>'
		},
		{
			id:  1,
			title: "glitter eye",
			content: "this is the second video",
			url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/w3p3dBhQYko" frameborder="0" allowfullscreen></iframe>'
		},
		{
			id: 2,
			title: "cut crease",
			content: "this is the third video",
			url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lYE9PRz1lVg" frameborder="0" allowfullscreen></iframe>'
		},
		{
			id: 3,
			title: "green smokey",
			content: "this is the fourth video",
			url:'<iframe width="560" height="315" src="https://www.youtube.com/embed/U47bhjRPxEU" frameborder="0" allowfullscreen></iframe>'
		},
		{
			id: 4 ,
			title: "highlight&contour",
			content: "this is the fifth video",
			url:'<iframe width="560" height="315" src="https://www.youtube.com/embed/svbc4IIlUt0" frameborder="0" allowfullscreen></iframe>'

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
		
		
	end

	get '/:id' do
		"SHOW: #{params[:id]}"
		id = params[:id].to_i
		@video = $videos[id]
		erb :'videos/show'

		

	end
	
	post '/' do

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