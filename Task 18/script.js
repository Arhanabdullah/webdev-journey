// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

// let arr= [1,2,3,4,5,6,7];
// let newArr = arr.map((val)=> {
//     return val*val
// })
// console.log(newArr);


// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// let grade = function(score){
//     let g = (score<35)? 'E':    (score>35 && score<=55 )? 'D' : (score>55 && score<=75 )? 'C' : (score>75 && score<=90 )? 'B': 'A';

//     return g;  
// }

// console.log(grade(34));


// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// const car = {
//     company: 'Maruti',
//     model: 'Alto 800',
//     year: 2015
// };

// function changeCarYear(carObj, newYear) {
//     carObj.year = newYear;
// }

// changeCarYear(car, 2022);
// const { model, year } = car;
// console.log('Model:', model);
// console.log('Year:', year);


// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// let arr= [1,2,3,4,5,6,7,8,9,10];
// let primeNumbers = arr.filter(num => {
//     if (num < 2) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; 
//     }
//     return true; 
// });
// console.log(primeNumbers);

