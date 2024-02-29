function boyerMooreSearch(text, pattern) {
  const last = {};
  const m = pattern.length;
  const n = text.length;

  // Preprocessing: calculate last occurrence of each character in the pattern
  for (let i = 0; i < m; i++) {
    last[pattern[i]] = i;
  }

  let i = m - 1; // Pointer for the pattern
  let j = m - 1; // Pointer for the text

  while (j < n) {
    if (pattern[i] === text[j]) {
      // Match found
      if (i === 0) {
        return j; // Whole pattern matched
      }
      i--;
      j--;
    } else {
      // Mismatch
      const lastOccurrence = last[text[j]];
      const jump = Math.max(1, m - Math.min(i, 1 + lastOccurrence));
      j = j + jump;
      i = m - 1;
    }
  }

  return -1; // Pattern not found
}

export default boyerMooreSearch;
