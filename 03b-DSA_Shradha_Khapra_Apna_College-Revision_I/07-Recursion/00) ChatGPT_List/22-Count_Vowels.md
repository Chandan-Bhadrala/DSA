## Q1) Provide me a solution with vowel map being saved separately rather than being clustered inside the if-condition.

Good requirement 👍 — this is the **right instinct** for clean, scalable code.

You want:

* Vowels defined **in one place**
* No long `if (a || e || i || o || u)` chain
* Still keep the recursion logic clean

Here is a **clean, idiomatic recursive solution** that matches your intent exactly.

Solution using a vowel map (single source of truth):

```js
function countVowels(str, i = 0) {
  // Base case: seed object
  if (i === str.length) {
    return { a: 0, e: 0, i: 0, o: 0, u: 0 };
  }

  // Recursive call
  const vowelObject = countVowels(str, i + 1);

  // Vowel lookup map (defined once logically)
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  const ch = str[i];

  // Single check, no condition chain
  if (vowels[ch]) {
    vowelObject[ch]++;
  }

  return vowelObject;
}

console.log(countVowels("aabbcceeffiigguuooeevvaa"));
```

Why this design is good:

* Vowels are **centralized** → easy to extend (`y`, uppercase handling, etc.)
* Recursion remains **pure and readable**
* No accidental return of primitives
* Accumulator object stays intact throughout unwinding

Small but important refinement (optional, advanced):

To avoid recreating `vowels` on every recursive call, lift it outside:

```js
const VOWELS = { a: true, e: true, i: true, o: true, u: true };

function countVowels(str, i = 0) {
  if (i === str.length) {
    return { a: 0, e: 0, i: 0, o: 0, u: 0 };
  }

  const vowelObject = countVowels(str, i + 1);

  const ch = str[i];
  if (VOWELS[ch]) {
    vowelObject[ch]++;
  }

  return vowelObject;
}
```

One-line summary for your notes:

Use a lookup map to replace condition chains and keep recursive logic focused.

If you want next, we can:

* Make it case-insensitive cleanly
* Convert this into a tail-recursive version
* Or rewrite it using a pure (no mutation) recursive approach
