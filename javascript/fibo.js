const fibo=(n)=>{
    let fab=[0,1]
for(let i=2; i<=n; i++){
    fab[i] = fab[i-1] + fab[i-2]
}

return fab;
}

console.log(fibo(5));