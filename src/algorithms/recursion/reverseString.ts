const reverseStringRecursive = (word: string): string => {
  if (word.length === 1) {
    return word;
  }

  return reverseStringRecursive(word.substring(1)) + word[0];
};

const reverseStringIterative = (word: string): string => {
  let output = "";

  for (let i = word.length - 1; i >= 0; i--) {
    output = output + word[i];
  }

  return output;
};

export { reverseStringIterative, reverseStringRecursive };
