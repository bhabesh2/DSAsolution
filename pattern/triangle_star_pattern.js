
let n = 5;

let i=1;

while(i<=n){
    let j = 1;
    let bag = [];
    while(j<=i){
        bag.push("*")
        j++;
    }
    console.log(bag.join(''));
    i++;
}