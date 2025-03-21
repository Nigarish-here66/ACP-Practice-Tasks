// Array filter
export function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Test cases
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([10, 15, 20, 25, 30])); 
console.log(filterEvenNumbers([7, 9, 13, 17])); 
