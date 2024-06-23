/*
let number=[1,2,3,4,5,6]
console.log( number);
number.push(7)
console.log( number);
number.pop()
console.log( number);
number.unshift(0)
console.log( number);
number.shift()
console.log(number);
let number2=number.slice(1,4)
console.log(number2);
let number3=number.splice(1,4)
console.log(number3);
console.log(number);
*/
/*
// convert data into array
let name='tanawish'
console.log(name);//out put = tanawish
let array=Array.from(name)
console.log(array);// out put = ['t','a','n'......]
*/
// delete operator
/*
let number=[1,2,3,4,5,6] // length =6

delete number[0] // when we delete tha array index will remain same 
console.log( number, number.length);

let name=['ali','tanawish', 3,2]
delete name[3]

let new_array=number.concat(name)
console.log(new_array);
*/
/*
let year=[1111,2222,33333,4444,5555]
let age=[10,20,30,40,50]
// let concat=year.concat(age)
let concat=age.concat(year)
console.log(concat,concat.length);
delete concat[5]
console.log(concat,concat.length);
*/
// sort 
// sort using compare function
/*
let compare=(a,b)=>{
    return a-b
}
// foe desending order
let compare2=(a,b)=>{
    return b-a
}
let age=[12,23,9,33,50,11,10]
console.log('orignal array',age);
age.sort()
console.log('sorted array in alphabatic li',age);
age.sort(compare);// this sort tha array in alphabaticck 1,2,3,4,5,....
console.log('sort array in 1 to 10 ',age); 
age.sort(compare2)
console.log('sort array in 10 to 1',age);
*/
/*
let name1=['asad','ali','zad']
console.log(name1.length); //output 3
console.log(name1.indexOf('ali'));// output 1 ali on 1 index
console.log(name1[1]);// output ali
console.log(name1[name1.length-1]);//output zad
*/
// calculate age of 4 persons using loop
/*
let agecal=function (year) {
    return 2020-year;
}
let ages=[1920,1029,2003,2000]
for (let index = 0; index < 4; index++) {

//   console.log();
    let calculateAge=[agecal(ages[index])]
    console.log(calculateAge);
}
  */

 // store in one array data 
 
 /*
let agecal=function (year) {
    return 2020-year;
}
let ages=[1920,1029,2003,2000]
let new_array=[]
for (let index = 0; index < ages.length; index++) {

//   console.log();
    let calculateAge=agecal(ages[index])
    new_array.push(calculateAge)
    // console.log(calculateAge);
}
console.log(new_array);

*/
