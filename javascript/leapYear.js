const year=(year)=>{
    const result= year / 4
    if(result == 0){
        return true
    }
    else{
        return false
    }
    return result
}

console.log(year(1804))