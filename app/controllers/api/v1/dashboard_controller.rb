class Api::V1::DashboardController < Api::BaseController
  def index
    @records = CustomerRecord.all
  end
end
