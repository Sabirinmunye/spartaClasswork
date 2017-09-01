class Post < ApplicationRecord
	belongs_to :user
	def post_params
    
      params.require(:post).permit(:title, :body, :user_id)
    end
end
