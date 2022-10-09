// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

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

// Test Passed! 😊


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

describe("fruitExtractor", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];
        const letterA = "a";
        const letterE = "e";

        expect(fruitExtractor(letterA)).toEqual(
            expect.arrayContaining(["Mango", "Apricot", "Peach"])
        );
        expect(fruitExtractor(letterE)).toEqual(
            expect.arrayContaining(["Cherry", "Blueberry", "Peach"])
        );
    })
  })
// Good Fail: ReferenceError: fruitExtractor is not defined


// b) Create the function that makes the test pass.




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.




// const secretCodeWord1 = "Lackadaisical";
// const secretCodeWord2 = "Gobbledygook";
// const secretCodeWord3 = "Eccentric";


// // const codedMessage = (string) => {
// //     arr = string.split ()
// //     return (arr)
// // }

// const codedMessage = (str) => {
//     let  newStr =
//     str.replace(/a/g, "4")
//     .replace(/e/g, "3")
//     .replace(/E/g, "3")
//     .replace(/i/g, "1")
//     .replace(/o/g, "0")
//     return newStr 
// }

// console.log(codedMessage(secretCodeWord3))