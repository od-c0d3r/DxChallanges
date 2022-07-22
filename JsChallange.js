const vowelsCount = (word) => word.match(/[aeiou]/gi).length;

function mostVowels(array) {
    const mostVowels = array.reduce((previousWord, currentWord) =>
        vowelsCount(previousWord) > vowelsCount(currentWord) ? previousWord : currentWord
    );
    return mostVowels;
}

function longestWord(wordsArray, sameLengthWords) {
    let longest = wordsArray.reduce((a, b) => {
        if (a.length == b.length) {
            sameLengthWords.push(a, b);
        }
        return a.length > b.length ? a : b;
    });
    return [longest, sameLengthWords]
}

function longestWordMostVowels(str) {
    wordsArray = str.replace(/\W/g, " ").replace(/\s+/g, " ").split(" ");

    const [longest, sameLengthWords] = longestWord(wordsArray, []);

    if (sameLengthWords.length) {
        return mostVowels(sameLengthWords);
    } else {
        return longest;
    }
}

console.log(
    longestWordMostVowels(
        "Smart people learn from experience and everyone, average people from their everything, stupid people already, experience have all the answers"
    )
);
