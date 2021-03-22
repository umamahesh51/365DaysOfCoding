package Day12.LeetCode56MergeIntervals;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/
class Solution {
    public int[][] merge(int[][] intervals) {
        List<int[]> ans = new ArrayList<>();
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        int currentS = intervals[0][0];
        int currentE = intervals[0][1];
        for (int i = 0; i < intervals.length; i++) {
            int[] interval = intervals[i];
            int s = interval[0];
            int e = interval[1];
            if (currentE >= s) {
                currentE = Math.max(currentE, e);
            } else {
                ans.add(new int[] { currentS, currentE });
                currentS = s;
                currentE = e;
            }
        }
        ans.add(new int[] { currentS, currentE });
        return ans.toArray(new int[0][]);
    }
}