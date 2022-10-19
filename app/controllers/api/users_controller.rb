class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']

  def index
    @users = User.all
    render :index
  end

  def create
    # render json: user_params
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      # render json: {user: @user}
      render "api/users/show"
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json:{message: 'no user found'}
    end
  end



  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end
