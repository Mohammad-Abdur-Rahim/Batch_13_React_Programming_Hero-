//  undefine .........

const sum = (a,b)=>{
    console.log(a,b);
}
sum(2);   // value not input = undefine

// undefine = value nai  / Null = pore value debo
const person ={
    firstName : 'Md Abdur Rahim',
    age : 25,
    salary:28000,
    married : false,
    studyAbroad : Null,
};

console.log(person['hello']);
console.log(person['studyAbroad']);