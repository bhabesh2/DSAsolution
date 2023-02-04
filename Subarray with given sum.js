// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S and return the left and right index(1-based indexing) of that subarray.

// Note:- Both the indexes in the array should be according to 1-based indexing. You have to return an arraylist consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

function subArraySum(arr, n, s) {
    let currentSum = arr[0];
    let left = 0;

    for (let right = 1; right <= n; right++) {
        while (currentSum > s && left < right - 1) {
            currentSum -= arr[left];
            left++;
        }

        if (currentSum === s) {
            return [left + 1, right];
        }

        if (right < n) {
            currentSum += arr[right];
        }
    }
    return [-1];
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let N = arr.length;
let s = 10;
let ans = subArraySum(arr,N,s);
console.log(ans);