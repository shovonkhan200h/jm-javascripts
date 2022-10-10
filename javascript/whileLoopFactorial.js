const factorial=(n)=>{
    let i=1;
    let fact =1;
    while(i<n){
        fact= fact * i
        i++
    }
    return fact;
}

console.log(factorial(5))