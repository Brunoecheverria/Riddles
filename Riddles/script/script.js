// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Counter for attempts
let attempts = 0;

// Function to check the result
function checkResult() {
    const guess = parseInt(document.getElementById("entryNumber").value);
    attempts++;

    if (guess < secretNumber) {
        document.getElementById("message").textContent = "Too low. Try again.";
    } else if (guess > secretNumber) {
        document.getElementById("message").textContent = "Too high. Try again.";
    } else {
        document.getElementById("message").textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById("entryNumber").disabled = true;
    }
}
