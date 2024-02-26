if (1 + 1 == 2) console.log("It's true");
console.log("_______________________");

function evaluateNumber(num) {
    if (num < 10) {
        console.log("Small");
    } else if (num < 100) {
        console.log("Medium");
    } else {
        console.log("Large");
    }
    console.log(num);
}

// Example usage
evaluateNumber(5);
evaluateNumber(50);
evaluateNumber(500);
