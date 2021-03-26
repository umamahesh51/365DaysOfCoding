package Day15.traprainwaterOptimalNoSpaceSolution;
/*
The idea is to maintain pointers left, right instead of left and right max arrays.

The plan is to fill from left.
The logic is 
if left < right
   currentHeight(based on left pointer) -left 
 else
   currentHeight (based on right pointer) - right
*/
public class Solution {
    
    public int trap(int[] height) {
        int length = height.length;
        if(length <3){
            return 0;
        }
        int left = height[0];
        int right = height[length-1];
        int trappedWater = 0;
        for(int i=1, j = length-2;i<=j;){
            if(left < right){
                if(height[i] < left){
                    trappedWater+=left-height[i];
                }else{
                    left = height[i];
                }
                i++;
            }else{
                if(height[j] < right){
                    trappedWater+=right-height[j];
                }else{
                    right = height[j];
                }
                j--;
            }
        }
        return trappedWater;
    }
}
