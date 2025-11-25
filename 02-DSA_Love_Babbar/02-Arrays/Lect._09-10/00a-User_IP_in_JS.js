import readline from "readline";

// Create r1, an readline object.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1. Use r1.question method to read a **single line input** from the user.
// 1.1. r1.question(query, callback)
// 1.2. r1.question takes two parameters, a query string and an callback function.
// 1.2.1. In callback function parameter, we have the value of the user input as an string.
// 1.3. query parameters takes single line input from the user, i.e., input is taken till enter is pressed.
// 1.4. Do call close function on r1, r1.close(). To close r1.

rl.question("Enter array elements separated by space: ", (input) => {
  // 1. Here in callback function, we are splitting the user-input string on the basis of the space, using a string split method.
  // 1.1. Output of the split method is an array of substrings.
  /*
  const sentence = "This is a sample sentence.";
  const words = sentence.split(" ");
  console.log(words); // Output: ["This", "is", "a", "sample", "sentence."]
  */
  // 2. Array of the substrings is converted into a number array using the map function.
  // 2.1. map(Number) applies Number() to each element, converting each string to a number.
  const arr = input.split(" ").map(Number);

  console.log("You entered:", arr);

  // 3. rl.close() is used to close the input interface. Without closing, the program will keep waiting.
  rl.close();
});

// ChatGPT refinement on my above notes.

// 1. Use rl.question() to read a single line of input from the user.

// 1.1. Syntax:
//      rl.question(queryString, callbackFunction)

// 1.2. rl.question() takes two parameters:
//      (a) queryString → A message shown to the user.
//      (b) callback(answer) → A function that receives the user's input as a string.

// 1.3. rl.question() reads **one full line** until the user presses Enter.
//      The input is always received as a string.

// 1.4. After finishing all inputs, call rl.close() to close the input interface.
//      If you do not close it, the program will not exit.
/* Code using require for importing a library.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array elements separated by space: ", (input) => {
    const arr = input.split(" ").map(Number);

    const [max, min] = maxAndMin(arr);

    console.log("Maximum:", max);
    console.log("Minimum:", min);

    rl.close();
});
 */
