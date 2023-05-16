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

