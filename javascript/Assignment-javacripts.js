const feetToMile=(mile)=>{
    let feet= 5280;
    result= mile* feet;
    return result;
}

console.log(feetToMile(2));


const woodCalculation=(chair,table,bed)=>{
    total= chair*chair*bed;
    return total
}
console.log(woodCalculation(2,5,3));

const brickCalculator=(floor)=>{
    let perFloor= floor *1000
    let totalBrick=0;
    if(floor<=10){
        totalBrick= perFloor *15
    }
    else if(floor<=20){
       let firstPart = 150000
       let remainPart = floor-10
       let secondPart = remainPart *12000
       totalBrick = firstPart + secondPart 
    }
    else{
        let firstPart = 150000
        let secondpart = 120000
        let remainPart = floor-20
        let thirdPart = remainPart * 10000
        totalBrick = firstPart + secondpart + thirdPart
    }
    return totalBrick

}


console.log(brickCalculator(37))

const tinyFriend=(friends)=>{
  let tiny= friends[0]
  for(let i=1; i<friends.length; i++){
    let element = friends   [i]
    if(element<tiny){
        tiny= element
    }
  }
  return tiny
}

let friends=[`sajeeb`,`anan`,`hridoy`]
let result = tinyFriend([`sajeeb`,`anan`,`hridoy`])
console.log(result)