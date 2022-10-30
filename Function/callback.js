const callBackFunction =(name,age,work)=>{
    console.log(`his name`, name);
    console.log(`his age`, age);
    work()

};

const fornt_end_developer=()=>{
    console.log(`front end developer`)
};

const back_end_developer=()=>{
    console.log(`back end developer`)
};

callBackFunction(`shovon`,27, fornt_end_developer)
callBackFunction(`nabila`,27, back_end_developer)