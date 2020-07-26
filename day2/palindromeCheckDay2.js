// Make an array with the strings that will need to check if they are palindromes
const list = ['level', 'algorithm', 'A man, a plan, a canal: Panama.'];

// Accept a word and strip special characters/spaces and convert to lowercase
// split() it by each character into an array
// reverse() the contents of that array
// join() the characters of the array into a string
reverseWord = (word) => {
    let specialCharRemove = word.replace(/[\s/\,\:\.]/g, "").toLowerCase();
    let splitCharArray = specialCharRemove.split("");
    let reversedCharArray = splitCharArray.reverse()
    let reversedString = reversedCharArray.join("")
    checkPalindrome(word, reversedString, specialCharRemove);
}

// Accept original string (for print out purposes)
// Accept stripped sring and reversed string to check if its a palindrome
checkPalindrome = (originalString, strippedString, reversedString) => {
    let word = (strippedString == reversedString) ? console.log(`${originalString} IS a palindrome`) : console.log(`${originalString} is NOT a palindrome`);
}

// For each string in the list array, call the reverseWord function
list.forEach(element => {
    reverseWord(element);
});