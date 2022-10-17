class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
        if @product
            render "api/products/show"
          else
            render json: {product: nil}
        end
    end

end
