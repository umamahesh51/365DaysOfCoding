package Day10;
import java.util.*;
/*
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

*/
class Solution {
    public int distributeCandies(int[] candyType) {
        int count = 0;
        Map<Integer, Integer> map = new HashMap<>();
        for(int c : candyType){
            if(!map.containsKey(c)){
                count++;
                map.put(c, 1);
            }
            else{
                map.put(c, map.get(c)+1);
            }
        }
        return Math.min(count, candyType.length/2);
    }
}