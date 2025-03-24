// Global variable
let globalVar = "I'm global";

function scopeDemo() {
    // Function-scoped variable
    let localVar = "I'm local";
    
    console.log("Inside function:");
    console.log("globalVar:", globalVar);    // Accessible
    console.log("localVar:", localVar);      // Accessible
}

// Test the scope
scopeDemo();

console.log("\nOutside function:");
console.log("globalVar:", globalVar);        // Accessible
console.log("localVar: Not accessible here - function scoped");  // More informative message