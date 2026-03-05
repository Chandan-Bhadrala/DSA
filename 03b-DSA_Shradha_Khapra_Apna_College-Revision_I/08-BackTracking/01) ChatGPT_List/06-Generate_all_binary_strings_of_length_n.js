/**
# Generate all balanced parentheses

## Question:
## Solution:
*/
// -----------------------------

function generateBinaryStrings(n, index = 0, current = "") {
  // Base case
  if (index === n) {
    console.log(current);
    return;
  }

  // Place 0
  generateBinaryStrings(n, index + 1, current + "0");

  // Place 1
  generateBinaryStrings(n, index + 1, current + "1");
}

// --- Output:
generateBinaryStrings(3);

/**
""
├─ "0"
│  ├─ "00"
│  └─ "01"
└─ "1"
   ├─ "10"
   └─ "11"
*/