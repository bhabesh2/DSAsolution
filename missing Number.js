// Missing number in array

// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

function missingNum(array, N){
    let obj = {};
    for(let i=0; i<N; i++){
        obj[arr[i]]= true;
    }
    for(let j=0; j<=N; j++){
        if(!obj[arr[j]]) return j;
    }
}

let arr = [1,2,3,5];
let N = arr.length;
let ans = missingNum(arr,N);
console.log(ans);

// 2nd type

let obj={};
    let miss="",bag=[]
    for(let i=0;i<arr.length;i++){
        bag.push(i+1)
        obj[arr[i]]=0
    }
    for(let i=0;i<bag.length;i++){
        if(obj[bag[i]]==undefined){
            console.log(bag[i])
            break;
        }
    }