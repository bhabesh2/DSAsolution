

let n = 5;

let i = 1;

while(i<=n){
    let j = n;
    let bag = '';
    while(j>=i){
        bag += " "+" "
        j--;
    }
    let k = 1;
    while(k<=i){
        bag += k+" "
        k++;
    }
    let l = 1;
    while(l<=i-1){
        bag += (i-l)+" ";
        l++;
    }
    console.log(bag)
    i++;
}