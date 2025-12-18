 s = s.toLowerCase(); // normalize string letter casing.

  let charObject = {};

  for (let i = 0; i < s.length; i++) {
    // L.H.S. is the read location for the value of the object key.
    // R.H.S. is the write operation that need to be performed on the object value.
    // Here, or "||" operator, R.H.S. takes the previous value, if no previous value exists consider it 0 rather than undefined.
    // If the key wouldn't exist it will create the key without the cry of undefined issue.
    charObject[s[i]] = (charObject[s[i]] || 0) + 1;
  }

  let maximumOccurredChar = "";
  let maximumOccurredCharCount = 0;

  // Search for the maximum occurred character.
  for (key in charObject) {
    // This pattern is universal:
    // Primary condition OR
    // Secondary tie-break condition
    if (
      charObject[key] > maximumOccurredCharCount ||
      (charObject[key] == maximumOccurredChar && key < maximumOccurredChar)
    ) {
      maximumOccurredCharCount = charObject[key];
      maximumOccurredChar = key;
    }
  }

  return { maximumOccurredChar, maximumOccurredCharCount };