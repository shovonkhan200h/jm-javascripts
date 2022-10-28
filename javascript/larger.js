const brickCalculator = (floor)=>{
    let perFloor= floor*1000;
    let brick;
    if(floor>0 && floor<=10){
        brick = perFloor*15
    }
    else if(floor>=20 && floor<=20){
        let firstTenFloor= 10* 150000
        let remainFloor= floor-10
        let secondTenFloor= remainFloor * 12
        brick= firstTenFloor+ secondTenFloor
    }
    else {
        let firstTenFloor= 10* 150000
        let secondTenFloor= 10*120000
        let remainFloor= floor-20
        let infinity= remainFloor * 10
        brick= firstTenFloor+ secondTenFloor+infinity
    }
    return brick;
}
console.log(brickCalculator(45))
