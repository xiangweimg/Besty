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
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def review_params
        params.require(:review).permit(:id, :content, :product_id, :reviewer_id, :rating)
    end

end
