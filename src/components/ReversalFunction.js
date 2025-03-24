function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello"));         // "olleh"
console.log(reverseString("JavaScript"));    // "tpircSavaJ"
console.log(reverseString("12345"));         // "54321"
console.log(reverseString(""));              // ""
console.log(reverseString("a"));             // "a"