/*1.Sum of Two Numbers:
Write a function that takes two parameters, a and b, and returns their sum.*/

function sum(a, b) {
    return a + b;
}

let result = sum(5, 3); 
console.log(result);


/*2.Check for Even or Odd:
Create a function that takes a number as an argument and returns whether it is even or odd.*/

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(5)); 
console.log(checkEvenOrOdd(10)); 

/*Reverse a String:
Implement a function that takes a string as input and returns the reversed version of that string.*/

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 
console.log(reverseString("world")); 
console.log(reverseString("12345")); 

/*4.Calculate Square:
Write a function that calculates the square of a given number.*/
function square(num) {
  return num * num;
}
console.log(square(5)); 
console.log(square(10)); 
console.log(square(2)); 

/*5.Concatenate Strings:
Create a function that takes two strings as parameters and returns their concatenation.*/

function concatenateStrings(str1, str2) {
  return str1.concat(str2);
}
console.log(concatenateStrings("hello", "world")); 
console.log(concatenateStrings("shikha", "patil")); 
console.log(concatenateStrings("123", "456")); 


/*6.Check for Palindrome:
Implement a function that checks if a given string is a palindrome.*/
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("level")); 
console.log(isPalindrome("javascript")); 

/*7.Calculate Factorial:
Write a function to calculate the factorial of a non-negative integer.*/
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = n;
  while (n > 2) {
    result *= (n - 1);
    n--;
  }
  return result;
}
console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(1)); 
console.log(factorial(10)); 


/*8.Maximum of Two Numbers:
Create a function that takes two numbers as parameters and returns the larger of the two.*/
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
console.log(maxOfTwoNumbers(5, 10)); 
console.log(maxOfTwoNumbers(10, 5)); 
console.log(maxOfTwoNumbers(3, 3)); 

/*9.Greet a Person:
Write a function that takes a person's name as a parameter and returns a greeting message.*/

function greetPerson(name) {
    return `Hello, ${name}`;
}

console.log(greetPerson("Shikha"));
console.log(greetPerson("Monika")); 

/*10.Calculate Average:
Implement a function that takes an array of numbers and returns their average.*/

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Return 0 if the array is empty
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}

// Example usage:
let numbers = [2, 4, 6, 8, 10];
console.log(calculateAverage(numbers)); // Output: 6 (average of 2, 4, 6, 8, 10 is 6)






