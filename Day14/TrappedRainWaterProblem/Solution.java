package Day14.TrappedRainWaterProblem;

/*
If the no. of Buildings are less than 3 then We can't trap rain water.
The Water stored at each block is
waterStoredAtABlock = minimum of Tallest buillding on left, Tallest Building on Ryt - currentBuilding Height;
If current building is Taller than minimum of left tallest, right talllest bildinhgs then rain trapped is Zero at current building.
*/
class Solution {
    public int trap(int[] height) {
        if(height.length <3){
            return 0;
        }
        int[] left = new int[height.length];
        int[] right = new int[height.length];
        left[0] = height[0];
        right[height.length-1] = height[height.length-1];
        for(int i=1, j=height.length-2; i<height.length;i++,j--){
            left[i] = Math.max(left[i-1], height[i]);
            right[j] = Math.max(right[j+1], height[j]);
        }
        int rainWater = 0;
        for(int i=1; i<height.length-1; i++){
            int max = Math.min(left[i-1], right[i+1]);
            if(max > height[i]){
                rainWater+=max-height[i];
            }
        }
        return rainWater;
    }
}