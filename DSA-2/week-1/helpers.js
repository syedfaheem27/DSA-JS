// Create a DupArray object that contains an array
// of Words
function createDupArray(string, size) {
  let dupArray = [];

  // One by one copy words from the given wordArray
  // to dupArray
  for (let i = 0; i < size; i++) {
    dupArray.push(new Word(string[i], i));
  }

  console.log(dupArray);

  return dupArray;
}

// Given a list of words in wordArr[]
function printAnagramsTogether(wordArr, size) {
  // Step 1: Create a copy of all words present in
  // given wordArr.
  // The copy will also have original indexes of words
  let dupArray = createDupArray(wordArr, size);

  // Step 2: Iterate through all words in dupArray and sort
  // individual words.
  for (let i = 0; i < size; i++) {
    dupArray[i].string = dupArray[i].string.split("").sort().join("");
  }

  console.log(dupArray);

  // Step 3: Now sort the array of words in dupArray
  dupArray = dupArray.sort((a, b) => a.string.localeCompare(b.string));
  console.log(dupArray);

  // Step 4: Now all words in dupArray are together, but
  // these words are changed. Use the index member of word
  // struct to get the corresponding original word
  for (let word of dupArray) {
    console.log(wordArr[word.index]);
  }
}

// Driver program
let wordArr = ["cat", "dog", "tac", "god", "act"];
let size = wordArr.length;
printAnagramsTogether(wordArr, size);
