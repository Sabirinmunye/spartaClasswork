class BlogController < Sinatra::Base
	$blogs = [{
			id: 0,
			title: "How to use Ruby",
			content: 'This is the first post',
			url: "8I539U5lXWY"
		},
		{
			id:  1,
			title: "How to use Bootstrap",
			content: "this is the second post",
			url: "gqOEoUR5RHg"
		},
		{
			id: 2,
			title: "How to use Javascript",
			content: "this is the third post",
			url: "WPvGqX-TXP0"
		}]
		

	#sets root as the parent-directory of the current file
	set :root, File.join(File.dirname(__FILE__), '..')

	#set the view directory correctly
	set :views, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do
		@blogs = $blogs
		erb  :'/blog/index'
		

	end

	get '/new' do
		@blogs = {
			id: "",
			title: "",
			content: "",
			url: ""
		}
		
		erb :'/blog/new'

	end

	post '/' do

		id = $blogs.length

		new_blog = {
			id: id,
			title: params[:title],
			content: params[:content],
			url: params[:url]
		}

		$blogs.push new_blog
		redirect "/"

	end

	get '/:id' do
		id = params[:id].to_i
		@blogs = $blogs[id]
		erb :'/blog/show'

	end

	get '/:id/edit' do 
		id = params[:id].to_i
			@blogs = $blogs[id]
			erb :'blog/edit'

	end 

	put '/:id' do 

		id = params[:id].to_i
		blog = $blogs[id];
		 
		blog[:title] = params[:title];
		blog[:content] = params[:content];
		blog[:url]= params[:url]
		  
		$blogs[id] = blog;
		  
		
		redirect "/";

	end

	delete "/:id" do 

		id = params[:id].to_i


		$blogs.delete_at(id)
		redirect "/"

	end


end