class Api::V1::StatusController < ApplicationController
  def show
    render json: { status: "ok" }
  end
end
