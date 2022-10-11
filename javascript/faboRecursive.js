const fibo=(n)=>{
    if(n==0){
        return [0]
    } 
    else if (n==1){
        return [0,1]
    }
    else{
        let fab= fibo(n-1)
        let nextElement= fab[n-1]+fab[n-2]
        fibo.push(nextElement)
        return fab;
    }
}

console.log(fibo(5));