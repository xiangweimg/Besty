class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render :index
    end
    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
          render :show
        else
          render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
      end
    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy if @review
        head :no_content # return header only
    end
    private
    def review_params
        params.require(:review).permit(:content, :product_id, :reviewer_id, :rating)
    end

end
