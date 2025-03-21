// Sum of Array Elements
export function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, -2, 8, 4])); 
console.log(sumArray([])); 
