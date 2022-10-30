const evenify=(num)=>{
    let result;
    if(num%2==0){
        result  = num + ` is even`;
    }
    else{
        result= num +` is odd`;
    }
    return result;
}

let result = evenify(15);
