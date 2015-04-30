class CustomersController < ApplicationController
  def index
    # svc = OData::Service.open('http://services.odata.org/V2/Northwind/Northwind.svc')
    # @customers = svc['CustomerDemographics']
    # svc = OData::Service.new('http://services.odata.org/V2/Northwind/Northwind.svc')
    # svc.Customers
    @customers = Customer.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @customers }
    end
  end

  def show
    @customer = Customer.find(50)
    respond_to do |format|
      format.html
      format.json { render json: @customer }
    end
  end
end
