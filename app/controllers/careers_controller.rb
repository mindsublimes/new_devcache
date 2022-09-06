class CareersController < ApplicationController
  # before_action :find_student, only: [:edit, :update, :show, :destroy]
  def index
    @job_offers = JobOffer.all
  end

  def new
    @job_offer = JobOffer.new
  end

  def create
    @job_offer = JobOffer.new(job_offer_params)
    if @job_offer.save
      flash[:alert] = 'Your suggestion has been submitted.'
      redirect_to careers_path
    else
      flash[:alert] = 'Your suggestion cannot be blank'
      render :new
    end
  end

  private

  def job_offer_params
    params.require(:job_offer).permit(:user_name, :email, :user_number, :resume )
  end

  # def find_student
  #   @student = Student.find(params[:id])
  # end


end
