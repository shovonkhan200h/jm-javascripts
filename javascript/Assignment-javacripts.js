const fitTomile=(num)=>{
    let feet =  num * 5280
    let mile= Math.floor(feet)
    return mile
}

console.log(fitTomile(5))

const woodCalculator =(chairwood,bedwood,tablewood)=>{
    let chair = chairwood
    let table = tablewood
    let bed = bedwood
    const total= chair + table + bed
    return total
}

console.log(woodCalculator(5,10,15))

function tinyFriend(friends) {
    const min = Math.max(...friends.map(name=> name.length))
    return friends.filter(name=> name.length == min)

}

let friends = ['kamal', 'shak', 'shak', 'shakib', 'brac'];
console.log(tinyFriend(friends));

const brickCalucator=(floorNumber)=>{
    let perFloor = floorNumber * 1000
    let totalBricks;
    if(floorNumber > 0 && floorNumber <=10){
        totalBricks = perFloor * 15
    }
    else if(floorNumber > 10 && floorNumber <= 20){
        totalBricks = (perFloor * 12)+ 30000;
    }

    else if(floorNumber > 30 && floorNumber <= 10000){
        totalBricks = (perFloor *10) + 70000;
    }
    else{
        return `invalid floor number`
    }
    return totalBricks;
}

let result= brickCalucator(20)
console.log(result);




