

let n = 4;

let i = 1;

while(i<=n){
    let bag = []
    let j = 1;
    while(j<=n){
        bag.push(i);
        j++;
    }
    console.log(bag.join(' '));
    i++;
}