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
// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numberArray[2]);
// let fruit = ["apple", "bananan", "orange", "mango"];
// console.log("my favorite fruits list");
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// Write a function that takes an array and returns the sum of all elements.
/*
let sumNumber = function () {
  let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;
  //   console.log(sum);
  for (let i = 0; i < numberArray.length; i++) {
    sum = sum + numberArray[i];
  }
  console.log(sum);
};
console.log(sumNumber());*/
// Write a function that takes an array and returns a new array with each element doubled.
/*
let number = [1, 2, 3, 4, 5];
let doubleArray = function (number) {
  let newArray = [];
  for (let i = 0; i < number.length; i++) {
    newArray.push(number[i] * 2);
  }
  return newArray;
};
console.log(doubleArray(number));
*/
// Write a function that removes the first and last elements from an array.
/*
let array = [1, 2, 3, 4, 5, 6];

let removesArray = function (arr) {
  arr.shift(); // Removes the first element
  arr.pop();   // Removes the last element
  return arr;  // Return the modified array
};

console.log(removesArray(array)); // Outputs: [2, 3, 4, 5]
*/
// let fruits = ["Apple", "Banana", "Cherry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// let copyFruits = fruits.slice(1, 3);
// console.log(copyFruits); // Outputs: ["Apple", "Banana", "Cherry"]
/*
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let someFruits = fruits.slice(3, 5);
console.log(someFruits); // Outputs: ["Banana", "Cherry", "Date"]
*/
// Write a function that reverses the order of elements in an array.
/*
let fruits = ["Apple", "Banana", "Cherry"];

let reverse = function (arr) {
  fruits.reverse(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
console.log(reverse(fruits));
*/
/*
sort an array
let number = [3, 2, 5, 0, 1];
number.sort();

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}
*/
// sort an array
// number.sort();
/*
let number = [3, 2, 5, 0, 1];

for (let i = 0; i < number.length ; i++) {
  console.log(number[i]);
}
*/
// find min and max in an Array
/*
let number = [1, 3, 6, 9, 12, 15];
for (let i = 0; i < number.length; i++) {
  console.log(Math.min(...number));
  }
  */
/*
let number = [1, 3, 6, 9, 12, 15, 1, 0, 10];
// number.sort(function (a, b) {
//   return a - b;
// });
// sort using arrow function
number.sort((a, b) => a - b);
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}
let minmaxFind = function (number) {
  let min = Math.min(...number);
  let max = Math.max(...number);
  return { min, max };
};
console.log(minmaxFind(number));
*/
// The spread operator allows an array to be expanded into individual arguments when calling a function. (...)
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Outputs: 6
