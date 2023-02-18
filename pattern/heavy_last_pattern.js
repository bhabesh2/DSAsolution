

let n = 5;

let i = 1;

while(i<=n){
    let j = n;
    let bag = '';
    while(j>=i){
        bag += n-j+1+" ";
        j--;
    }
    let k = 1;
    while(k<i){
        bag += "*"+" ";
        k++;
    }
    let l = 1;
    while(l<=i-1){
        bag += "*"+" "
        l++;
    }
    let m = n;
    while(m>=i){
        bag += m-i+1+" ";
        m--;
    }
    console.log(bag);
    i++;
}