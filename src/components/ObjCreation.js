// Create person object
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
    location: "New York"
};

// Log individual properties
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Occupation:", person.occupation);
console.log("Location:", person.location);

// Log entire object structure
console.log("Full person object:", person);

// Verify object keys
console.log("Object keys:", Object.keys(person));

// Verify object entries
console.log("Object entries:", Object.entries(person));