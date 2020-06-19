class Api::ApplicationsController < ApplicationController
  def index
    @applications = Application.all.where(user_id: current_user.id)
    render :index

  end

  def show
    @application =  Application.find(params[:id])
    render :show
  end

  def create
    @application = Application.new(application_params)
    if @application.save
      render json: @application
    else
      render json: @application.errors.full_messages, status: 422
    end

  end
  def new
    @application = Application.new
    render json: @application
  end

  def create
    @application = Application.new(application_params)
    if @application.save
      render json: @application
    else
      flash.now[:errors] = @application.errors.full_messages
      render json: @application
    end
  end

  def edit
    @application = Application.find(params[:id])
    render json: @application
  end

  def update
    @application = Application.find(params[:id])
    if @application.update_attributes(application_params)
      render json: @application

      # redirect_to todo_url(@todo)
    else
      flash.now[:errors] = @application.errors.full_messages
      render json: @application
    end
  end

  def destroy
    @application = Application.find(params[:id])
    @application.destroy
    render json: @application
  end
  private

  def application_params
    params.require(:application).permit(
      :id, :user_id, :first_name, :last_name, :middle_name,
      :suffix, :country, :address_line1, :address_line2, :city,
      :state_location, :postal_code, :contact_method, :primary_phone,
      :secondary_phone, :email, :part_one_validated, :part_two_validated,
      :part_three_validated, :part_four_validated, :part_five_validated, :part_six_validated,
      :part_seven_validated, :part_eight_validated, :part_nine_validated, :start_date,
      :authorized, :countries_authorized, :resume_file,
      :undergrad_institution, :undergrad_major, :undergrad_gpa,
      :undergrad_major_gpa, :grad_institution, :grad_major , :grad_gpa,
      :explain_interest, :referred_by, :relocate, :resume_text,
      :race, :gender, :veteran, :disability, :signature, :date, :application_complete,
      :prefix

    )
  end
end
