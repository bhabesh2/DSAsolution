

let n = 5;

// for(let i = 1; i <= n; i++){
//     let bag = [];
//     for(let j = n; j >= i; j-- ){
//         bag.push(j)
//     }
//     console.log(bag)
// }

let i = 1;

while(i <= n){
    let j = n;
    let bag = [];
    while(j >= i){
        bag.push(" ")
        j--;
    }
        
    let k = 1;
    while(k <= i){
        bag.push("*");
        k++;
    }
    console.log(bag.join(' '))
    i++;
}