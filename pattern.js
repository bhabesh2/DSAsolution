

let n = 5;

let i = 1;

while(i<=n){
    let bag = [];
    for(j=1; j<=n; j++){
        bag.push(j)
    }
    i++;
    console.log(bag)
}

// reverse order;  

while(i<=n){
    let bag = [];
    for(j=1; j<=n; j++){
        bag.push(n-j+1)
    }
    i++;
    console.log(bag)
}

