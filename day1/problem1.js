// Make an array with the strings that will need to be reversed
const list = ['Cat', 'The Daily Byte', 'civic'];

// Accept a word then split() it by each character into an array
// reverse() the contents of that array
// join() the characters of the array into a string and log it out
reverseWord = (word) => {
    let splitCharArray = word.split("");
    let reversedCharArray = splitCharArray.reverse()
    let reversedString = reversedCharArray.join("")
    console.log(reversedString);
}

// For each string in the list array, call the reverseWord function
list.forEach(element => {
    reverseWord(element);
});