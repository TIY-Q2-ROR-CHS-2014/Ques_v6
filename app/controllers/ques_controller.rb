class QuesController < ApplicationController
  before_action :authenticate_user!
  # def index
  #   # GET
  #   # List of data
  #   # Replaced by our home index CURRENTLY
  # end
  def index
    @ques = if params[:q]
      Que.search_names params[:q]
    else
      Que.all
    end
    respond_to do |format|
      format.js
    end
  end

  def show
    # GET
    # Shows an individual object
  end

  def help_student

    respond_to do |format|
      format.js
    end
  end

  def resolve_student
    @que.nick_leave!
    respond_to do |format|
      format.js
    end
  end

  def try_helping_student
    @que.nick_tried_helping!
    respond_to do |format|
      format.js
    end
  end

  def help_me
    Que.create({name: current_user.name, email: current_user.email})
    flash[:notice] = "You have successfully updated le Que."
    redirect_to root_path
  end
  
  private
    def que_params
      params.require(:que).permit(:name, :email, :image)
    end

end
