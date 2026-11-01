// Get the current hour (0 - 23)
const currentHour = new Date().getHours();

// Determine the correct greeting
let greeting;

if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

// Display the greeting
console.log(greeting);
