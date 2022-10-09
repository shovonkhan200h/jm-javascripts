let arr=[
    {id:1,
    name:`shovon`,
    age:27},
    {id:2,
        name:`nabila`,
        age:27},
        {id:3,
            name:`anan `,
            age:27},
            {id:4,
                name:`hridoy`,
                age:27}
]
arr.push({id:3, name:`hridoy`, age:28},{id:4, name:`hridoy`, age:28},)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift({id:5, name:`sajeeb`, age:25})
console.log(arr)
let arr2=arr.slice(0,3)
console.log(arr2)

//push will add new value at the end of the array
//pop will remove existing  value at the end of the array
// shift will remove existing value at the first  of the array
// unshift will add existing value at the first of the array
//slice will remove existing value at the start point to given value end point
