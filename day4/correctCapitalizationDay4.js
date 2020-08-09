// We check will check to see if the strings are using proper capitalization 
// by running them through functions that cleanse and convert them to proper
// capitalization then compare the original string passed in to the new string

const wordArray = ["USA",
    "Calvin",
    "compUter",
    "coding"
];

// Lets check to see if the strings characters are all lowercase
allLowerCaseCheck = string => {
    let properCapitalization = string.toLowerCase() //.charAt(0).toUpperCase() + string.slice(1);
    if (string === properCapitalization) {
        console.log(`"${string}" uses capitalization properly (All letters lowercase)`)
    } else {
        firstCapitalCheck(string)
    }
}

// Lets check to see if the strings characters are all capitalized
allCapsCheck = string => {
    const allCapString = string.toUpperCase();
    if (string === allCapString) {
        console.log(`"${string}" uses capitalization properly (All Letters Capitalized)`)
    } else {
        allLowerCaseCheck(string)
    }
}

// Lets check to see if the string has only the first letter capitalized
firstCapitalCheck = string => {
    let convertToLowercase = string.toLowerCase()
    let firstLetterCapital = string.charAt(0).toUpperCase()
    correctCapitalizationString = firstLetterCapital + convertToLowercase.slice(1)
    if (string === correctCapitalizationString) {
        console.log(`"${string}" uses capitalization properly (First Letter Capitalized)`)
    } else {
        console.log(`"${string}" does not use capitalization properly`)
    }
}

// Checks each word in the array for proper capitalization
wordArray.forEach(word => {
    allCapsCheck(word)
});