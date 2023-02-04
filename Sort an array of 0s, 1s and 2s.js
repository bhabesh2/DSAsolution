

// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place.


function sort012(arr,N){

let low = 0;
let mid = 0;
let high = N - 1;

while (mid <= high) {
  switch (arr[mid]) {
    case 0:
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
      break;
    case 1:
      mid++;
      break;
    case 2:
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
      break;
  }
}
return arr;
}

let arr = [0,2,1,2,0];
let n = arr.length;
let ans = sort012(arr,n);
console.log(ans)
