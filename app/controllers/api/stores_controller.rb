class Api::StoresController < ApplicationController
    
    def show
        @shop = Store.find(params[:id])
        if @shop
            render "api/stores/show"
            # render :show
          else
            render json: {shop: nil}
        end
    end
end
