// String Reversal Function (JavaScript) 
export function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello")); 
console.log(reverseString("JavaScript")); 
console.log(reverseString("12345")); 
console.log(reverseString("!@#$$#@!"));
