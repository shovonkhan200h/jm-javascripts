const add =(num1,num2 = 0) =>{
    // if(num2 == undefined){   //1st method         
    //     num2=0;
    // }


    // num2 = num2 || 0; // 2nd method
    return num1 + num2;
}

const total = add(12);
console.log(total);

// Function defualt parameter for not provide value