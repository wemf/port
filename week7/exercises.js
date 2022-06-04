// Exercise 5.3
function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
}
  
function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}
  
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Exercise 18.1
const url = "https://eloquentjavascript.net/author";
const types = ["text/plain", "text/html", "application/json", "application/rainbows+unicorns"];

async function showTypes() {
    for (let type of types) {
        let resp = await fetch(url, {headers: {accept: type}});
        console.log(`${type}: ${await resp.text()}\n`);
    }
}

showTypes();