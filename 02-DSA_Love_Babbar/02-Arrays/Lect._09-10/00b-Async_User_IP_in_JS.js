import readline from "readline/promises";

// Why to use this async-await over previous one, is to avoid callback hell.
// Full detail is on Hashnode.
// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const input = await rl.question("Enter array elements separated by space: ");

  const arr = input.split(" ").map(Number);

  console.log("Array is:", arr);

  rl.close(); // Always close after you're done
}

main();

/*
✔️ Line-by-line explanation

1. readline/promises → gives us Promise-based question(), so we can use await.
2. await rl.question(...) → waits for the user to type and press Enter.
3. Input is returned as a string.
4. split(" ") → divides by space.
5. map(Number) → converts each value to number.
6. rl.close() → closes the terminal interface.
*/
