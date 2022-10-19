class Api::CartItemsController < ApplicationController
    def index
      if current_user
        @carts = CartItem.where(buyer_id: current_user.id)
      else
        @carts = CartItem.all
      end
      
      render :index
    end

    def show
      @cart = CartItem.find_by(id: params[:id])
      render :show
    end

    def create
      @cart = CartItem.find_by_user_and_product(params[:buyer_id], params[:product_id])
      if @cart
        @cart.quantity += params[:quantity]
      else
        @cart = CartItem.new(cart_params)
      end

      if @cart.save
        render :show
      else
        render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    def update

    end

    def destroy
      # @item = CartItem.find_by_user_and_product(params[:buyer_id], params[:product_id])
      @item = CartItem.find_by(id: params[:id])
      @item.destroy if @item
      head :no_content # return header only
    end

    private
    def cart_params
        params.require(:cart_item).permit(:buyer_id, :product_id, :quantity)
    end

end
