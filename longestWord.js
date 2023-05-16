/**
 * This code takes the given string and checks for the longest word.
 * @param {*} sentence The string given.
 * @returns The longest Word.
 */
function findLongestWord(sentence){
const words = sentence.split(" ")
let longestWord = ""
let maxWords = 0
for(let i = 0; i < words.length; i++){
    if (words[i].length > maxWords){
        maxWords = words[i].length
        longestWord = words[i]

    }
}
return longestWord
}

