// Exercise 3.2 https://eloquentjavascript.net/code/#3.2
// Function declaration because it's a recursive function
function isEven(n) {
    if (n < 0) 
      return isEven(-n);
    if (n === 0) 
      return true;
    if (n === 1) 
      return false;
    return isEven(n - 2);
}
  
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// Exercise 4.2 https://eloquentjavascript.net/code/#4.2
function reverseArray(arr){
    // without mutate the original array
  return arr.map((val, index, array) => array[array.length - 1 - index]);
}

function reverseArrayInPlace(arr){
  return arr.reverse();
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]