/*
 https://leetcode.com/problems/two-sum/
*/

var twoSum = function(nums, target) {

    for(let i=0;i<nums.length-1;i++){
        let c = target - nums[i];
        let flag = nums.indexOf(c, i+1);
        if(flag !== -1)
        {
            return [i, flag];
            
        }
    
    }

    return -1;
};



console.log(twoSum([3,2,4], 6))  // [1, 2]

// The Complexity is O(n^2)
/*
Runtime
40ms
Beats 45.23%
*/

//////////////////////////////////////////////////////


var twoSum = function(nums, target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let c = target - nums[i];
        if(map.has(c)){
            return [map.get(c), i];
        }
        map.set(nums[i], i);
    }
    return -1;
}
console.log(twoSum([3,2,4], 6))  // [1, 2]

// The Complexity is O(n)
/*
Runtime
0ms
Beats 100.00%

*/