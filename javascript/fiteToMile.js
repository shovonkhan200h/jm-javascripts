const fitTomile=(num)=>{
    let feet =  num * 5280
    let mile= Math.floor(feet)
    return mile
}

// console.log(fitTomile(5))

const woodCalculator =(chairwood,bedwood,tablewood)=>{
    let chair = chairwood
    let table = tablewood
    let bed = bedwood
    const total= chair + table + bed
    return total
}

// console.log(woodCalculator(5,10,15))


const brickCalculator = ()=>{

}


function tinyFriend(friends) {
    const min = Math.max(...friends.map(name=> name.length))
    return friends.filter(name=> name.length == min)

}

let friends = ['kamal', 'shak', 'shak', 'shakib', 'brac'];
console.log(tinyFriend(friends));