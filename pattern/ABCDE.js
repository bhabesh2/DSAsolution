

let n = 5;

let i = 1;

let count = 0;

while(i<=n){
    let j = 1;
    let bag = '';
    while(j<=n){
        count++;
        bag += String.fromCharCode(65+count-1)+" ";
        j++;
    }
    console.log(bag)
    i++;
}