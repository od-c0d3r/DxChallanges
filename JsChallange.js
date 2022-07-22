const vowelsCount = (word) => word.match(/[aeiou]/gi).length;

function mostVowelsWord(array) {
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
        return mostVowelsWord(sameLengthWords);
    } else {
        return longest;
    }
}



/************** Test Cases **************/

// Lower with spaces
console.log(
    longestWordMostVowels(
        "“smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (socrates)"
    )
);

// Upper with spaces
console.log(
    longestWordMostVowels(
        "“MART PEOPLE LEARN FROM EVERYTHING AND EVERYONE, AVERAGE PEOPLE FROM THEIR EXPERIENCE, STUPID PEOPLE ALREADY, HAVE ALL THE ANSWERS” (SOCRATES)"
    )
);

// Lower and upper with spaces
console.log(
    longestWordMostVowels(
        "“Smart people learn from everything and everyone, average people from their Experience, stupid people already, have all the answers” (Socrates)"
    )
);

// Non-english letters
console.log(
    longestWordMostVowels(
        "“Smart people learn from everything and everyone, average people from their Éxperience, stupid people already, have all the answers” (Socrates)"
    )
);

// Multiple words with spaces
console.log(
    longestWordMostVowels(
        "“Smart people learn from everything and everyone, average people from their experience fxperience rxperience, stupid people already, have all the answers” (Socrates)"
    )
);

// Un-coverd case >> Multiple words with same vowels count
console.log(
    longestWordMostVowels(
        "“Smart people learn from everything and everyone, average people from their experience oxperience ixperience, stupid people already, have all the answers” (Socrates)"
    )
);
