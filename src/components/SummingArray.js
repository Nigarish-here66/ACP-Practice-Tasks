// Using traditional for loop
function sumArrayLoop(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Using forEach method
function sumArrayForEach(numbers) {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum;
}

// Test cases
const numbers = [1, 2, 3, 4, 5];
console.log("Using for loop:", sumArrayLoop(numbers));      // 15
console.log("Using forEach:", sumArrayForEach(numbers));    // 15

// Additional test cases
console.log(sumArrayLoop([]));                              // 0
console.log(sumArrayLoop([10]));                            // 10
console.log(sumArrayLoop([-1, 1]));                         // 0