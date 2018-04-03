module Api::V1
  class TweetsController < ApplicationController

    # GET /tweets
    def index
      @tweets = Tweet.all

      render json: @tweets
    end

    # GET /tweets/1
    def show
      render json: @tweet
    end

    # POST /tweets
    def create
      @tweet = Tweet.new(tweet_params)
      render json: @tweet
    end

    # PATCH/PUT /tweets/1
    def update
      @tweet = Tweet.find(params[:id])
      @tweet.update_attributes(tweet_params)
      render json: @tweet
    end

    # DELETE /tweets/1
    def destroy
      @tweet.destroy
    end

    private

      # Only allow a trusted parameter "white list" through.
      def tweet_params
        params.require(:tweet).permit(:user, :body)
      end
  end
end