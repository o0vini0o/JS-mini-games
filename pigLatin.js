/** English to Pig Latin Translator
Description: Create a program that translates English text to Pig Latin.
Requirements:
  1. The program should take an English phrase as an input from process.argv.
  2. Convert each word to Pig Latin:
    - If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
       Example: Happy = appyh + ay = appyhay
    - If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
       Example: Child = Ildch + ay = Ildchay
    - If a word starts with a vowel add the word “way” at the end of the word.
       Example: Awesome = Awesome +way = Awesomeway
  3. Output the translated phrase to the console.
*/

// 1. take an English phrase as an input from process.argv
const englishText = process.argv.slice(2);

// creat Arrays for vowels and consonants
const alphabets = [];
for (let i = 97; i < 123; i++) {
  alphabets.push(String.fromCharCode(i));
}

const vowels = ["a", "e", "i", "o", "u"];
const consonants = alphabets.filter((letter) => !vowels.includes(letter));

const changeWord = (word) => {
  const firstLetter = word.charAt(0);
  const secondLetter = word.charAt(1);
  const wordEnd = "ay";
  // - If a word starts with a consonant and a vowel,
  // put the first letter of the word at the end of the word and add “ay.”
  if (
    consonants.includes(firstLetter.toLowerCase()) &&
    vowels.includes(secondLetter.toLowerCase())
  ) {
    const newWord = word.slice(1) + firstLetter.toLowerCase() + wordEnd;
    return firstLetter === firstLetter.toUpperCase()
      ? newWord.charAt(0).toUpperCase() + newWord.slice(1)
      : newWord;
  }

  // - If a word starts with two consonants
  // move the two consonants to the end of the word and add “ay.”
  if (
    consonants.includes(firstLetter.toLowerCase()) &&
    consonants.includes(secondLetter.toLowerCase())
  ) {
    const newWord =
      word.slice(2) + firstLetter.toLowerCase() + secondLetter + wordEnd;
    return firstLetter === firstLetter.toUpperCase()
      ? newWord.charAt(0).toUpperCase() + newWord.slice(1)
      : newWord;
  }

  // - If a word starts with a vowel add the word “way” at the end of the word.
  if (vowels.includes(firstLetter)) {
    return word + "way";
  }
  return word;
};

const pigLatin = englishText.map((word) => changeWord(word));
console.log(pigLatin.join(" "));
