

let n = 4;

let i = 1;

while(i<=n){
    let j = 1;
    let bag = [];
    while(j<=n){
        bag.push(String.fromCharCode(65+j-1));
        j++;
    }
    console.log(bag.join(' '));
    i++;
}