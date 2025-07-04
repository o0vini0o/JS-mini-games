/**
  Description: Implement a basic Caesar Cipher encryption.
  Requirements:
    - The program should take a phrase and a shift number as inputs from process.argv.
    - Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
    - Case insensitive
    - A negative shift means shift to the left
    - A positive shift means shift to the right
    - Output the encrypted phrase to the console.
 */
const originalText = process.argv.slice(2);
const shiftNumber = parseInt(originalText.pop());
if (isNaN(shiftNumber)) {
  console.log("please enter a shift number at the end");
} else {
  // creat Arrays for english alphabets
  const alphabets = [];
  for (let i = 97; i < 123; i++) {
    alphabets.push(String.fromCharCode(i));
  }
  // chane letter according to conditon
  const changeLetter = (letter, shiftNumber) => {
    let newLetter = "";
    const len = alphabets.length;
    // for loop -> alphabet in letter
    for (i = 0; i < letter.length; i++) {
      // Find the Index of the letter in the alphabets.
      const index = alphabets.findIndex(
        (alphabet) => alphabet === letter.charAt(i)
      );
      // Get the newIndex and puts the index in the range of the alphabet by taking a modal
      // const shiftIndex = (index + shiftNumber + len) % len; // index+shiftNumber < -len -> error
      //   let shiftIndex = index + shiftNumber;
      //   while (shiftIndex < 0) {
      //     shiftIndex += len;
      //   }
      //   newLetter += alphabets[shiftIndex % len];

      const shiftIndex = (index + (shiftNumber % len) + len) % len;
      newLetter += alphabets[shiftIndex];
    }
    return newLetter;
  };
  // use .map() change every letter in originalText
  const newText = originalText.map((letter) =>
    changeLetter(letter, shiftNumber)
  );
  // output
  console.log(newText.join(" "));
}
