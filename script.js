let equal_pressed = 0;

// Refer all the buttons in the html excluding AC and DEL buttons.
let button_input = document.querySelectorAll(".input-button");

// Refer to the input, equal, erase and clear buttons.
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

// Access each class using forEach function.
button_input.forEach((buttonClass) => {
    buttonClass.addEventListener("click", () => {
        if (equal_pressed === 1) {
            input.value = "";
            equal_pressed = 0;
        };
        // display value for each button
        input.value += buttonClass.value;
    });
});
// Solve the user's input when clicking on equal button.
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inpVal = input.value;
    try {
        // Evaluate the user's input
        let solution = eval(inpVal);
        // true for natural numbers
        // false for decimals
        if (Number.isInteger(solution)) {
            input.value = solution;
        }else{
            input.value = solution.toFixed(2);
        }
    }
    catch (err) {
        // If the user has entered invalid input.
        // Examples of wrong input are :- 2..3*4, = wihout any value on the input, etc.
        alert("Invalid Input!");
    };
});

// Clear the input using AC button.
clear.addEventListener("click", () => {
    input.value = "";
});

// Erasing a single value using the DEL button.
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});
