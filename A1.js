 /*1.Check if a Number is Positive, Negative, or Zero*/
let number = 6; 

if (number > 0) 
{
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

/*2: Check if a Year is a Leap Year*/
let year=2027

if (year%4==0){

	console.log('It is a leap year')
}
else{

	console.log('Its not a leap year')
}

/*3: Determine the Largest of 3 Numbers*/
let num1 = 10;
let num2 = 25;
let num3 = 15;


let largestNumber;

if (num1 >= num2 && num1 >= num3) {
    largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largestNumber = num2;
} else {
    largestNumber = num3;
}


console.log(`The largest number is: ${largestNumber}`);


/*4: Write code using switch statement to show traffic signal light information

if it is red show ==>  "Stop! The color is red."

if it is green show ==> "Go! The color is green."

if it is yellow show ==> “Slow down! The color is yellow.”*/

let signalColor = "red"; 

switch (signalColor) {
    case "red":
        console.log("Stop! The color is red.");
        break;
    case "green":
        console.log("Go! The color is green.");
        break;
    case "yellow":
        console.log("Slow down! The color is yellow.");
        break;
    default:
        console.log("Invalid signal color.");
}