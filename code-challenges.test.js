// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { array } = require("yargs");
// I HATE YARGS

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {

        const secretCodeWord1 = "Lackadaisical";
        const secretCodeWord2 = "Gobbledygook";
        const secretCodeWord3 = "Eccentric";

        expect(codedMessage(secretCodeWord1)).toEqual(
            ("L4ck4d41s1c4l")
        );
        expect(codedMessage(secretCodeWord2)).toEqual(
            ("G0bbl3dyg00k")
        );
        expect(codedMessage(secretCodeWord3)).toEqual(
            ("3cc3ntr1c")
        );
    })
  })
// Good Fail: ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// * Resouces used *
// https://www.tutorialrepublic.com/faq/how-to-replace-character-inside-a-string-in-javascript.php
    // info on how to replace characters in a string using replace.string method 
        // syntax: string.replace(/character to be replaced here/, "desired character here")
// https://thispointer.com/javascript-replace-multiple-characters-in-string/
    // info on how to add multiple replace methods, we can chain them with .replace after each set

// INPUT:
    // const secretCodeWord1 = "Lackadaisical";
    // const secretCodeWord2 = "Gobbledygook";
    // const secretCodeWord3 = "Eccentric";
// OUTPUT:
    // L4ck4d41s1c4l
    // G0bbl3dyg00k
    // 3cc3ntr1c

// First I'll create a function codedMessage calling on str
const codedMessage = (str) => {
    // I'll make a new let for a new string that we will use to replace the characters
    let newStr =
    // To replace the first letter I'll use the string.replace method:
    // This only replaces the first instance of 'a' so to replace it globally we just add a 'g' outside of the /a/
    str.replace(/a/g, "4")
    // Repeat the process for every letter to be replaced
    .replace(/e/g, "3")
    // Include capital E to be replaced as we have 'Eccentric'
    .replace(/E/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0")
    // return our new string with the correct letters replaced with numbers!
    return newStr 
}

// Test Passed! 


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

describe("fruitExtractor", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {

        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];
        const letterA = "a";
        const letterE = "e";
        

        expect(fruitExtractor(fruitArray, letterA)).toEqual(
            expect.arrayContaining(["Mango", "Apricot", "Peach"])
        );
        expect(fruitExtractor(fruitArray, letterE)).toEqual(
            expect.arrayContaining(["Cherry", "Blueberry", "Peach"])
        );
    })
  })
// Good Fail: ReferenceError: fruitExtractor is not defined


// b) Create the function that makes the test pass.

// INPUT:
    // const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    // const letterA = "a"
    // const letterE = "e"

// OUTPUT: 
    // ["Mango", "Apricot", "Peach"]
    // ["Cherry", "Blueberry", "Peach"]

// First create a function fruitExtractor calling on the array and the string 'arr' and 'letter'
const fruitExtractor = (arr, letter) => {
    // we need to return a modified array so we'll use .filter to only return the words containing specific letters
    return arr.filter((value) => value.toLowerCase().includes(letter))
    // we can use .filter on a value which we set to include 'letter'
    // originally for letterA, it was only returning Mango and Peach, excluding Apricot because of the capital A
    // to solve for the case sensitivity we can just set the value to .toLowerCase()
}

// Test passes!

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouser", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'.", () => {

        const hand1 = [5, 5, 5, 3, 3];
        const hand2 = [5, 5, 3, 3, 4];
        const hand3 = [5, 5, 5, 5, 4];
        const hand4 = [7, 2, 7, 2, 7];

        expect(fullHouser(hand1)).toEqual(
            true);
        expect(fullHouser(hand2)).toEqual(
            false);
        expect(fullHouser(hand3)).toEqual(
            false);
        expect(fullHouser(hand4)).toEqual(
            true);
    })
})
// Good fail: ReferenceError: fullHouser is not defined


// b) Create the function that makes the test pass.

// INPUT:
    // const hand1 = [5, 5, 5, 3, 3];
    // const hand2 = [5, 5, 3, 3, 4];
    // const hand3 = [5, 5, 5, 5, 4];
    // const hand4 = [7, 2, 7, 2, 7];  

// OUTPUT: 
    // true
    // false
    // false
    // true

// // METHOD: 
const fullHouser = (array) => {
    let handSort = array.sort()
        // create a new variable handSort to sort our array from least to greatest so that we can see if we have duplicates
        if(handSort[0] === handSort[2] && handSort[3] === handSort[4]){
        return true
        // if index 0 is equal to index 2 then we know we have indexes 0 through 2 as the same value: three of a kind
        // using AND, if index 3 and 4 are equal then we would have a pair. This pair with the three of a kind: FULL HOUSE
    } else if (handSort[0] === handSort[1] && handSort[2] === handSort[4]){
        // now we just do the opposite if the three numbers are at the end of the array instead of the beginning depending on the value of the duplicate numbers
        return true
    } else {
        return false
        // that covers both cases of full house after the arrays are sorted, so return false for everything else
    }
}
// TEST PASSED 🥹

// half baked failed method I was noodling with
// const fullHouser = (hand) => {
//     hand.sort
//     let fullHouse = true
//     let handOne = 0
//     let handTwo = 0
//     if (handOne === 2 && handTwo === 3) {
//         return fullHouse
//     } else if 
//     (handOne === 3 && handTwo === 2) {
//         return fullHouse
//     } else {
//         return fullHouse
//     }
// }