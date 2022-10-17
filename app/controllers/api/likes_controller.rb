class Api::LikesController < ApplicationController
    def index
        @likes = Like.all
        render :index
    end
    
end
