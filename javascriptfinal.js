/*1.Find a 2nd maximum and Minimum number in an array */

/*function findSecondMaxMin(arr) {
    // Sort the array in ascending order
    arr.sort(function(a, b) {
        return a - b;
    });

    // Second minimum will be at index 1
    let secondMin = arr[1];

    // Second maximum will be at the second last index
    let secondMax = arr[arr.length - 2];

    return {
        secondMin: secondMin,
        secondMax: secondMax
    };
}

// Example usage:
let array = [10, 5, 8, 3, 7, 2];
let result = findSecondMaxMin(array);
console.log("Second Minimum:", result.secondMin);
console.log("Second Maximum:", result.secondMax);*/

/*2. Sort an array without using built in methods*/
/*function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let array = [5, 3, 8, 1, 2];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array.slice())); // Pass a copy of the array to keep the original intact*/

/*3. write a function to remove the duplicate element from an array*/
/*function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// Example usage:
let array = [1, 2, 3, 4, 2, 3, 1, 5];
console.log("Original array:", array);
let uniqueArray = removeDuplicates(array);
console.log("Array after removing duplicates:", uniqueArray);*/

/*4. write a function to remove duplicate elements in a string "HelloWorld"*/
/*function removeDuplicates(str) {
    let uniqueChars = '';
    for (let char of str) {
        if (uniqueChars.indexOf(char) === -1) {
            uniqueChars += char;
        }
    }
    return uniqueChars;
}

let inputString = "HelloWorld";
let result = removeDuplicates(inputString);
console.log(result); // Output: "HeloWrd"*/

/*5. Write function to convert camelCase to snake_case*/
function camelToSnake(camelCase) {
    return camelCase.replace(/[A-Z]/g, match => "_" + match.toLowerCase());
}

let camelCaseString = "helloWorldExample";
let snakeCaseString = camelToSnake(camelCaseString);
console.log(snakeCaseString); // Output: "hello_world_example"

/*6. write a function to conver snake_case to camelCase*/
function snakeToCamel(snakeCase) {
    return snakeCase.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
}

let snakeCaseString = "hello_world_example";
let camelCaseString = snakeToCamel(snakeCaseString);
console.log(camelCaseString); // Output: "helloWorldExample"

/*7. write a function to flatten the nested array*/
function flattenArray(arr) {
    let flattened = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattened = flattened.concat(flattenArray(element));
        } else {
            flattened.push(element);
        }
    });

    return flattened;
}

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

/*8. Write a function to find the 2nd largest number in a nested array*/
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let subArray of arr) {
        for (let num of subArray) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num < largest) {
                secondLargest = num;
            }
        }
    }

    return secondLargest;
}

const nestedArray = [[5, 3, 8], [10, 6, 4], [12, 15, 9]];
const secondLargestNumber = findSecondLargest(nestedArray);
console.log(secondLargestNumber); // Output: 12


/*9. write a function to generate below pattern
    1
    2 9
    3 8 10
    4 7 11 14
    5 6 12 13 15*/

function generatePattern(n) {
    // Initialize a 2D array with zeros
    const pattern = [];
    for (let i = 0; i < n; i++) {
        pattern.push(new Array(n).fill(0));
    }

    let currentNumber = 1;

    // Fill the 2D array with the pattern
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j <= i; j++) {
                pattern[j][i - j] = currentNumber++;
            }
        } else {
            for (let j = i; j >= 0; j--) {
                pattern[j][i - j] = currentNumber++;
            }
        }
    }

    // Print the pattern
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            if (pattern[i][j] !== 0) {
                row += pattern[i][j] + " ";
            }
        }
        console.log(row.trim());
    }
}

generatePattern(5);


    
/*10. program for adding zeros after 3 values in array 
    Example: [1, 2,3,4,5,6,6,7,8]
    Output: [1, 2,3,0,4,5,6,0,6,7,8,0]*/

function addZeros(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        if ((i + 1) % 3 === 0 && i !== arr.length - 1) {
            result.push(0);
        }
    }
    return result;
}

const inputArray = [1, 2, 3, 4, 5, 6, 6, 7, 8];
const outputArray = addZeros(inputArray);
console.log(outputArray); // Output: [1, 2, 3, 0, 4, 5, 6, 0, 6, 7, 8, 0]


/*11. Reverse a string a without using built in method*/
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const originalString = "HelloWorld";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "dlroWolleH"


/*12. Write a function to return a fibonacci series*/

function fibonacciLoop(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

const n = 10; // Number of Fibonacci numbers to generate
const fibSeries = fibonacciLoop(n);
console.log(fibSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/*13. Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original.*/
function deepClone(obj) {
    // Check if obj is an array
    if (Array.isArray(obj)) {
        // Create a new array to store the cloned values
        const clonedArray = [];
        // Iterate over each element in the array and clone it
        for (let i = 0; i < obj.length; i++) {
            clonedArray.push(deepClone(obj[i]));
        }
        return clonedArray;
    }
    // Check if obj is an object
    else if (typeof obj === 'object' && obj !== null) {
        // Create a new object to store the cloned properties
        const clonedObject = {};
        // Iterate over each property in the object and clone it
        for (let key in obj) {
            clonedObject[key] = deepClone(obj[key]);
        }
        return clonedObject;
    }
    // If obj is neither an array nor an object, return it as is
    else {
        return obj;
    }
}

// Example usage:
const originalObject = {
    a: 1,
    b: [2, 3, { c: 4 }],
    d: { e: 5 }
};

const clonedObject = deepClone(originalObject);

// Modify the cloned object to test deep cloning
clonedObject.a = 100;
clonedObject.b[0] = 200;
clonedObject.b[2].c = 400;
clonedObject.d.e = 500;

console.log(originalObject);
console.log(clonedObject);


/*14. write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'*/
/*array*/
function countOccurrencesArray(arr) {
    const occurrences = {};
    arr.forEach(element => {
        occurrences[element] = (occurrences[element] || 0) + 1;
    });
    return occurrences;
}

const array = [1, 2, 3, 3, 5, 2, 1, 7, 6, 8, 7, 8];
const occurrencesArray = countOccurrencesArray(array);
console.log(occurrencesArray);
/*string*/
function countOccurrencestring(str){
    const occurences = {};
    for (let char of str) {
    occurences[char]={ occurences[element]=(occurences[element] || 0)+1;
}

return occurences;
}
const string ="abcdefg";

const occurencesstring = countOccurrencestring(string);
countOccurrencestringstring(string);
console.log(occurencesstring);

/*15. write a function to capitalize the each words first letter to capital 
    Ex : ['abc','def','ghi']
    output : ['Abc', 'Def','Ghi"]*/

function capitalizeWords(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

const words = ['abc', 'def', 'ghi'];
const capitalizedWords = capitalizeWords(words);
console.log(capitalizedWords); // Output: ['Abc', 'Def', 'Ghi']


/*16. write a function to calculate the sum of total marks in an array of objects 
    ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]*/

function calculateTotalMarks(arr) {
    let totalMarks = 0;
    arr.forEach(obj => {
        totalMarks += obj.marks;
    });
    return totalMarks;
}

const subjects = [
    { sub: 'Maths', marks: 60 },
    { sub: 'Science', marks: 70 },
    { sub: 'English', marks: 90 }
];

const totalMarks = calculateTotalMarks(subjects);
console.log(totalMarks); // Output: 220

/*20. Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]*/

function removeDuplicates(a, b) {
  let uniqueArray = [...new Set([...a, ...b])];
  return uniqueArray;
}

let a = [1, 2, 3, 4, 5];
let b = [5, 3, 7, 8, 9];

let uniqueArray = removeDuplicates(a, b);
console.log(uniqueArray); // [1, 2, 3, 4, 5, 7, 8, 9]

