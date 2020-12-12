class Api::V1::CustomerRecordsController < Api::BaseController
  def create
    @record = CustomerRecord.new(record_params)
    if @record.save
    else
      render json: @record.errors
    end
  end

  private
  def record_params
    params['params'].permit(:name, :procedure, :inst, :phone_number, :price, :record_dt)
  end

end
