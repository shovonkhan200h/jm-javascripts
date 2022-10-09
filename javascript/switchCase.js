let marks = 97;

switch(true){
    case marks>=80 && marks<=100:
        console.log("A");
        break;
        case marks>=70 && marks<=79:
        console.log("B");
        break;  
        case marks>=60 && marks<=69:
        console.log("C");
        break;
        case marks>=50 && marks<=59:
        console.log("D");
        break;
        case marks>=40 && marks<=49:
        console.log("Pass");
        break;
        default:
            console.log("Unknown marks");  
}

