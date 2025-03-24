// Using array.filter()
function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Alternative implementation using a loop
function getEvenNumbersLoop(numbers) {
    const evenNumbers = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

// Test cases
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Using filter():", getEvenNumbers(numbers));     // [2, 4, 6, 8, 10]
console.log("Using loop:", getEvenNumbersLoop(numbers));     // [2, 4, 6, 8, 10]

// Additional test cases
console.log(getEvenNumbers([]));                            // []
console.log(getEvenNumbers([1, 3, 5]));                     // []
console.log(getEvenNumbers([2, 4, 6]));                     // [2, 4, 6]