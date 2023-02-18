

let n = 5;

let i = 1;

while(i<=n){
    let j = 1;
    let bag = '';
    while(j<=i){
        bag += String.fromCharCode(65+n-i+j-1)+' ';
        j++;
    }
    console.log(bag)
    i++;
}