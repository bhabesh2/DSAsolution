

let n = 4;

let i = 1;

while(i<=n){
    let bag = []
    let j = 1;
    while(j<=n){
        bag.push(String.fromCharCode(65+i-1));
        j++;
    }
    console.log(bag.join(' '));
    i++;
}