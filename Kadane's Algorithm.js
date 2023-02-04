
// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
// You don't need to read input or print anything. The task is to complete the function maxSubarraySum() which takes Arr[] and N as input parameters and returns the sum of subarray with maximum sum.


function maxSubarraySum(arr,N){
    let max = -Infinity;
    for(let i=0; i<N; i++){
        let currentSum = 0;
        for(let j=i; j<N; j++){
            currentSum+=arr[j];
            if(currentSum>max){
                max = currentSum;
            }
        }
    }
    return max;
}

let arr = [1,2,3,-2,5];
arr = [-1,-2,-3,-4]
let n = arr.length;
let ans = maxSubarraySum(arr,n);
console.log(ans)

// 2nd type

    function maxSubarraySum(arr, N){
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < N; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
console.log(maxSubarraySum(arr,n));