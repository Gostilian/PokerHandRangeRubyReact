class HandRangesController < ApplicationController
  before_action :set_hand_range, only: [:show, :update, :destroy]

  # GET /hand_ranges
  def index
    @hand_ranges = HandRange.all

    render json: @hand_ranges
  end

  # GET /hand_ranges/1
  def show
    render json: @hand_range
  end
  
  # GET /hand_ranges/user_id/1
  def show_user_id
    @hand_range = HandRangeGroup.select("*").joins(:hand_range, :hand_range_folder)
    .where("hand_range_groups.hand_range_folder_id = hand_range_folders.id AND hand_range_groups.hand_range_id = hand_ranges.id AND hand_range_folders.user_id = " + params[:user_id] )
                  
    render json: @hand_range
  end

  # POST /hand_ranges
  def create
    @hand_range0 = HandRange.new(RangeName: params[:RangeName], RangeScope: params[:RangeScope0])
    @hand_range0.save
    @hand_range1 = HandRange.new(RangeName: params[:RangeName], RangeScope: params[:RangeScope1])
    @hand_range1.save
    @hand_range2 = HandRange.new(RangeName: params[:RangeName], RangeScope: params[:RangeScope2])
    @hand_range2.save
    @hand_range3 = HandRange.new(RangeName: params[:RangeName], RangeScope: params[:RangeScope3])
    @hand_range3.save

    @hand_range_folder = HandRangeFolder.new(FolderName: "Evans Folder", user_id: params[:user_id])
    @hand_range_folder.save
    @hand_range_group0 = HandRangeGroup.new(GroupName: "First Hand Range Group", hand_range_id: @hand_range0.id, hand_range_folder_id: @hand_range_folder.id)
    @hand_range_group1 = HandRangeGroup.new(GroupName: "First Hand Range Group", hand_range_id: @hand_range1.id, hand_range_folder_id: @hand_range_folder.id)
    @hand_range_group2 = HandRangeGroup.new(GroupName: "First Hand Range Group", hand_range_id: @hand_range2.id, hand_range_folder_id: @hand_range_folder.id)
    @hand_range_group3 = HandRangeGroup.new(GroupName: "First Hand Range Group", hand_range_id: @hand_range3.id, hand_range_folder_id: @hand_range_folder.id)
    
    @hand_range_group0.save
    @hand_range_group1.save
    @hand_range_group2.save

    if @hand_range_group3.save

      @result_hand_ranges = HandRangeGroup.select("*").joins(:hand_range, :hand_range_folder).where(:hand_range_groups => { hand_range_id: @hand_range0.id} )
      render json: @result_hand_ranges, status: :created, location: @hand_range
    else
      render json: @hand_range_group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hand_ranges/1
  def update
    if @hand_range.update(hand_range_params)
      render json: @hand_range
    else
      render json: @hand_range.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hand_ranges/1
  def destroy
    @hand_range.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hand_range
      @hand_range = HandRange.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def hand_range_params
      params.require(:hand_range).permit(:RangeName, :RangeScope0, :RangeScope1, :RangeScope2, :RangeScope3, :user_id)
    end
end
