function boyerMooreSearch(text, pattern) {
  const textLower = text.toLowerCase();
  const patternLower = pattern.toLowerCase();

  const last = {};
  const m = patternLower.length;
  const n = textLower.length;

  // Preprocessing: calculate last occurrence of each character in the pattern
  for (let i = 0; i < m; i++) {
    last[patternLower[i]] = i;
  }

  let i = m - 1; // Pointer for the pattern
  let j = m - 1; // Pointer for the text

  while (j < n) {
    if (patternLower[i] === textLower[j]) {
      // Match found
      if (i === 0) {
        return true; // Whole pattern matched
      }
      i--;
      j--;
    } else {
      // Mismatch
      const lastOccurrence = last[textLower[j]];
      const jump = Math.max(1, m - Math.min(i, 1 + (lastOccurrence || -1)));
      j = j + jump;
      i = m - 1;
    }
  }

  return false; // Pattern not found
}

export default boyerMooreSearch;