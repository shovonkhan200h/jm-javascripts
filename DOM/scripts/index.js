let second =document.getElementsByClassName(`autor`)
for(let i=0; i<second.length; i++){
    element= second[i]
    element.style.color=`green`
};

let third =document.querySelectorAll(`.description`);
for(let i=0; i<third.length; i++){
    element= third[i]
    element.style.color=`red`
};

let fourth= document.getElementById(`first`);
let yo= document.createElement(`div`);
yo.innerHTML=`this is from javascript`
fourth.appendChild(yo)