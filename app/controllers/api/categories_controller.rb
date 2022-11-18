class Api::CategoriesController < ApplicationController
    
    def show
        @category = Category.find(params[:id])
        if @category
            render "api/categories/show"
          else
            render json: {category: nil}
        end
    end

end
