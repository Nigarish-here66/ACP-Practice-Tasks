var globalVar = "I am global";

function scopeDemo() {
    // Function-scoped variable (accessible only inside this function)
    var functionVar = "I am function-scoped";
    
    console.log(globalVar);  // Accessible inside the function
    console.log(functionVar); // Accessible inside the function
}

scopeDemo();

console.log(globalVar); // Accessible outside the function
// console.log(functionVar); // Uncommenting this will cause an error (not defined outside function)

export default scopeDemo;
