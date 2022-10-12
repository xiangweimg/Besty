class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only:[:destroy]

  def show
    # debugger
    if current_user
      # render json: {user: current_user}
      @user = current_user
      render "api/users/show"
    else
      render json: {user: nil}
    end
  end

  def create
    # debugger
    @user = User.find_by_credentials(
      params[:credential],
      params[:password])
    
    if @user
      login!(@user)
      # render json: {user: @user}
      render "api/users/show"
    elsif params[:credential] == "" 
      render json: { errors: ["Email can't be blank."]}, status: :unauthorized
    else
      render json: { errors: ['The provided credentials were invalid.']}, status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end

end
