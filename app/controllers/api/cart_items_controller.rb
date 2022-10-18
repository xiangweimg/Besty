class Api::CartItemsController < ApplicationController
    def index
        @carts = CartItems.all
        render :index
    end

    def show
    end

    def create
        @cart = CartItems.new(cart_params)
        if @cart.save
          render :show
        else
          render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def updated

    end

    def destroy
      @cart.destroy
      head :no_content # return header only
    end

    private
    def cart_params
        params.require(:cart_items).permit(:buyer_id, :product_id, :quantity)
    end

end
