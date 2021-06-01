// ASSESSMENT 3: Coding practical questions with Jest

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.


// a) Create a test with expect statements for each of the variables provided.

// code describe with the name of the function
// write variables for array input and outputs
// test what you want the the function to do.
// write expect statement .
fdescribe("fibLength", () => {
    let input = ["6"];
    let outPut = [1, 1, 2, 3, 5, 8];
    test ("return a new array of that length containing the numbers of the Fibonacci", () => {
      expect(fibLength(input)).toEqual(outPut)
      });
  });
  
  
  // Example input: 6
  // Expected output: [1, 1, 2, 3, 5, 8]
  
  // Example input: 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  
  
  
  
  
  // b) Create the function that makes the test pass.
  
  var output1 = [1, 1, 2, 3, 5, 8]
  var outPut2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  
  const fibLength = () => {
  let fibArray = [1, 1]
  for( let i=1 ; i<array -1; i++){
  fibArray.push(fibArray[i] + fibArray[i-1])
  }
  return fibArray
  }
  
  
 
  
  
  
  // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
  
  //use filter or if the number is not divible by two with the remainder of 0
  
  // a) Create a test with expect statements for each of the variables provided.
  
  var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  // Expected output: [-9, 7, 9, 199]
  
  var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
  // Expected output: [-823, 7, 23]
  
  describe('onlyOdd', () => {
      test('return new array of odd numbers sorted from least to greatest', () => {
        expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
      })
    })
  
//   // b) Create the function that makes the test pass.
  
   //declare function named oddNumbers
   //make variable of new empty array
   //declare if statement of num divided by two and not equal 0 to get the odd number.
  const oddNumbers = (sortArr) => {
      let numOnly = sortArr.filter((value, index) => {
          return typeof value === "number"
      })
      let oddNumOnly = numOnly.filter((value, index) => {
          return value % 2 !== 0
      })
      return oddNumOnly.sort((a, b) => a - b)
    }
          
          




  // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
  
  // a) Create a test with expect statements for each of the variables provided.
  
  // a describe method that lists the name of the function.

  
    // describe what the function does.
    //set expectations for testing to return the number added to the number behind it in the array
    describe ("addNum") = (numArr) =>{
        test("returns array of the accumulating sum", () => {
            expect(addNum(numbersToAdd1)).toEqual([2, 6, 51, 60])
            expect(addNum(numbersToAdd2)).toEqual([0, 7, 1, 11])
            expect(addNum(numbersToAdd3)).toEqual([])
    })
  }

  
  
  
  
  
  // b) Create the function that makes the test pass.
 
  // make function where if the array is empty, it will return []
  //make new array, this array will hold the new data
  //new data is the addition of the numbers

  const addNum = (numArr) => {
      if (numArr.length === 0){
          return [];
      }
      let newArr = numArr.map((value, index) => {
          let sum = value +numArr[index];
          return sum + numArr[index]
      })
  }
  console.log(newArr)
  //I ran into some problems here getting it to function properly it wasnt able to read it
  //It kept coming back as test suit failed and I'm not sure why
  //I ended up not being able to fully complete this solely due to time restraints, and having to deal with issues with my family. It wont happen again.