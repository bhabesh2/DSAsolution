

// time complexity O(N);

let a = 14;
let ans = "prime";

for(let i = 2; i<a; i++){
    if(a%i==0){
        ans = "Not prime";
        break;
    }
}
console.log(ans);

let b = 12;

console.log(a&b);