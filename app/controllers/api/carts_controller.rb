class Api::CartsController < ApplicationController
    def index
        @carts = Cart.all
        render :index
    end

    def create
        @cart = Cart.new(cart_params)
        if @cart.save
          render "api/carts"
        else
          render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def updated

    end

    def destroy

    end

    private
    def cart_params
        params.require(:cart).permit(:buyer_id, :product_id)
    end

end
