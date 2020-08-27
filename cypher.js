function decrypt(inputStr, key, offset) {
  // generic alphabet
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // break inputs to arrays
  let offsetWordAlteredAlphabet = offset.split("");
  let keyWordArr = key.split("");
  let codedStrArr = inputStr.split("");

  // generating initial offset alphabet by adding every letter not present in offset word
  for (let i = 0; i < alphabet.length; i++) {
    if (!offsetWordAlteredAlphabet.includes(alphabet[i])) {
      offsetWordAlteredAlphabet.push(alphabet[i]);
    }
  }

  let offsetAlphabetsForKeywordCharacters = [];

  // generating array of arrays to appropriate length
  for (let i = 0; i < keyWordArr.length; i++) {
    offsetAlphabetsForKeywordCharacters[i] = [];
  }

  let indexesOfKeywordCharactersInOffsetAlteredAlphabet = [];

  // for each letter in keyword, find the index in the offset alphabet
  for (let i = 0; i < keyWordArr.length; i++) {
    for (let j = 0; j < offsetWordAlteredAlphabet.length; j++) {
      if (offsetWordAlteredAlphabet[j] === keyWordArr[i]) {
        indexesOfKeywordCharactersInOffsetAlteredAlphabet[i] = j;
      }
    }
  }

  // for each index of the keyword word character in offset altered alphabet, populate rest of array in vignere cypher format
  for (
    let i = 0;
    i < indexesOfKeywordCharactersInOffsetAlteredAlphabet.length;
    i++
  ) {
    for (
      let j = indexesOfKeywordCharactersInOffsetAlteredAlphabet[i];
      j <
      offsetWordAlteredAlphabet.length +
        indexesOfKeywordCharactersInOffsetAlteredAlphabet[i];
      j++
    ) {
      if (j < offsetWordAlteredAlphabet.length) {
        offsetAlphabetsForKeywordCharacters[i].push(
          offsetWordAlteredAlphabet[j]
        );
      } else {
        offsetAlphabetsForKeywordCharacters[i].push(
          offsetWordAlteredAlphabet[j - offsetWordAlteredAlphabet.length]
        );
      }
    }
  }

  let answerIndexesInOffsetAlteredAlphabet = [];

  // for each character of the coded string, find the index of where it would be in the key word alphabet
  for (let i = 0; i < codedStrArr.length; i++) {
    if (i < offsetAlphabetsForKeywordCharacters.length) {
      for (let j = 0; j < offsetAlphabetsForKeywordCharacters[i].length; j++) {
        if (offsetAlphabetsForKeywordCharacters[i][j] === codedStrArr[i]) {
          answerIndexesInOffsetAlteredAlphabet.push(j);
        }
      }
    } else {
      for (
        let j = 0;
        j <
        offsetAlphabetsForKeywordCharacters[
          i % offsetAlphabetsForKeywordCharacters.length
        ].length;
        j++
      ) {
        if (
          offsetAlphabetsForKeywordCharacters[
            i % offsetAlphabetsForKeywordCharacters.length
          ][j] === codedStrArr[i]
        )
          answerIndexesInOffsetAlteredAlphabet.push(j);
      }
    }
  }

  let finalAnswer = [];

  // populate final answer
  for (let i = 0; i < answerIndexesInOffsetAlteredAlphabet.length; i++) {
    finalAnswer.push(
      offsetWordAlteredAlphabet[answerIndexesInOffsetAlteredAlphabet[i]]
    );
  }
  console.log(finalAnswer.join(""));
  return finalAnswer;
}

function encrypt(inputStr, key, offset) {
  // generic alphabet
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // break inputs to arrays
  let offsetWordAlteredAlphabet = offset.split("");
  let keyWordArr = key.split("");
  let plainTextArr = inputStr.split("");

  // generating initial offset word altered alphabet by adding every letter not present in offset word
  for (let i = 0; i < alphabet.length; i++) {
    if (!offsetWordAlteredAlphabet.includes(alphabet[i])) {
      offsetWordAlteredAlphabet.push(alphabet[i]);
    }
  }

  let offsetAlphabetsForKeywordCharacters = [];

  // generating array of arrays to appropriate length
  for (let i = 0; i < keyWordArr.length; i++) {
    offsetAlphabetsForKeywordCharacters[i] = [];
  }

  let indexesOfPlainStrCharactersInOffsetWordAlteredAlphabet = [];
  for (let i = 0; i < plainTextArr.length; i++) {
    for (let j = 0; j < offsetWordAlteredAlphabet.length; j++) {
      if (plainTextArr[i] === offsetWordAlteredAlphabet[j]) {
        indexesOfPlainStrCharactersInOffsetWordAlteredAlphabet.push(j);
      }
    }
  }

  let indexesOfKeywordCharactersInOffsetAlteredAlphabet = [];
  for (let i = 0; i < keyWordArr.length; i++) {
    for (let j = 0; j < offsetWordAlteredAlphabet.length; j++) {
      if (offsetWordAlteredAlphabet[j] === keyWordArr[i]) {
        indexesOfKeywordCharactersInOffsetAlteredAlphabet[i] = j;
      }
    }
  }

  // for each index of the key word character in offset alphabet, populate rest of array in vignere cypher format
  for (
    let i = 0;
    i < indexesOfKeywordCharactersInOffsetAlteredAlphabet.length;
    i++
  ) {
    for (
      let j = indexesOfKeywordCharactersInOffsetAlteredAlphabet[i];
      j <
      offsetWordAlteredAlphabet.length +
        indexesOfKeywordCharactersInOffsetAlteredAlphabet[i];
      j++
    ) {
      if (j < offsetWordAlteredAlphabet.length) {
        offsetAlphabetsForKeywordCharacters[i].push(
          offsetWordAlteredAlphabet[j]
        );
      } else {
        offsetAlphabetsForKeywordCharacters[i].push(
          offsetWordAlteredAlphabet[j - offsetWordAlteredAlphabet.length]
        );
      }
    }
  }

  let answerArr = [];

  for (let i = 0; i < plainTextArr.length; i++) {
    if (i < offsetAlphabetsForKeywordCharacters.length) {
      console.log(i);
      answerArr.push(
        offsetAlphabetsForKeywordCharacters[i][
          indexesOfPlainStrCharactersInOffsetWordAlteredAlphabet[i]
        ]
      );
    } else {
      console.log(i % offsetAlphabetsForKeywordCharacters.length);
      answerArr.push(
        offsetAlphabetsForKeywordCharacters[
          i % offsetAlphabetsForKeywordCharacters.length
        ][indexesOfPlainStrCharactersInOffsetWordAlteredAlphabet[i]]
      );
    }
  }

  console.log(answerArr.join(""));
}

encrypt("BROTHEBROTHEBROTHE", "DRAGON", "HENRY");

decrypt("LBUYORLBUYORLBUYOR", "DRAGON", "HENRY");
