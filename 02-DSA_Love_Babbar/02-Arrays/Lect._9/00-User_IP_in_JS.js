import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter array elements separated by space: ", (input) => {
  const arr = input.split(" ").map(Number);

  console.log("You entered:", arr);

  rl.close();
});

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
