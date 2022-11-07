const ages= [12,13,12];
const ages2 = [12,14,12];
const ages3 = [12,16,12];

const total = ages.concat(ages2).concat(ages3);

const total2 = [...ages, ...ages2, ...ages3];

console.log(total2);