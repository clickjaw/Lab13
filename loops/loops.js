"use strict";

// ATTENTION: Please create functions for each exercise and test them with your function calls.


// 1) Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
let arrayOneTotal = 0;
let arrayTwoTotal = 0;

for (let i = 0; i < arr_1.length; i++){
    arrayOneTotal += arr_1[i];
}
console.log(arrayOneTotal);
for(let k = 0; k <arr_2.length; k++){
    arrayTwoTotal += arr_2[k];
}
console.log(arrayTwoTotal)

let totalArrayTotal = arrayOneTotal + arrayTwoTotal;
console.log(totalArrayTotal);


// 2) Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
let mArray = [];
for (let m = 2; m <= n1; m++){
   if (m % 2 != 0){
    continue;
   }else{
    mArray.push([m]);
   }
}
console.log(mArray);
 


// 3) Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let i = arr.length; i >=0; i--){
    console.log(arr[i]);
}
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line




// 4) Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
let arrZero = arr_3[0] + arr_4[0];
let arrOne = arr_3[1] + arr_4[1];
let arrTwo = arr_3[2] + arr_4[2];

let arr_5 = [arrZero, arrOne, arrTwo];
console.log(arr_5);




// 5) Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

// Sample numbers : 0, -1, 4
// Output : 4, 0, -1


// 6) Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
