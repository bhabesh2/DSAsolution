

let n = 5;

let i = 1;

while(i<=n){
    let bag = [];
    let j = 1;
    while(j<=i){
        bag.push(i-j+1);
        j++;
    }
    console.log(bag.join(" "))
    i++;
}