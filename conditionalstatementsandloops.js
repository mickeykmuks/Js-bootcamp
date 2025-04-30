//Exercise 1 
var temperature;
if (-10 < 0) {
    ("it's freezing!").value
}
var temperature;
if (0 > 15) {
    ("it's cold").value
}
var temperature;
if (16 > 25) {
    ("it's mild").value
}
var temperature;
if (25 > 50) {
    ("it's warm").value;
}


switch(temperature) {
    case "25 > 50":
        text = "it's warm";
        break;
        default:
            //code block
}

//Exercise 2: Divisibility check

var number = 10; 
var num1 = 2;
var num2 = 3;
var divisible = num1 / num2;

if (num1 == 0 && num2 % 3 == 0 )
    console.log(`${number} is divisible by both 2 and 3.`);
else
    console.log(`${number} is not divisible by both 2 and 3.`)

    
if (number % 2 == 0)
    console.log(`${number} is divisible by 2.`)
else
    console.log(`${number} is not divisible by 2.`)

if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 3.");
} 
function checkNumber(number) {
    if (num1 % 2 !== 0 && num2 % 3 !== 0) {
      console.log(number + " is not divisible by 2 or 3.");
    } else {
      console.log(number + " is divisible by 2 or 3.");
    }
  }

  function checkDivisibilityBy2(number) {
    switch (number % 2) {
        case 0:
            console.log(`${number} is divisible by 2.`);
            break;
        default:
            console.log(`${number} is not divisible by 2.`);
            break;
    }
}


  function checkDivisibilityBy3(number) {
    switch (number % 3) {
        case 0:
            console.log(`${number} is divisible by 3.`);
            break;
        default:
            console.log(`${number} is not divisible by 3.`);
            break;
    }
}

  switch (true) {
    case (num1 % 2 !== 0 && num2 % 3 !== 0):
        console.log(`${num1} is not divisible by 2 or 3.`);
        break;
    default:
        console.log(`${num2} is divisible by 2 or 3.`);
}

//Exercise 3: For Loops

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

let sum = 5;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("The sum of all numbers from 1 to 100 is: " + sum);

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const number = [3, 7, 2, 9, 5, 10, 8];
let largestNumber = numbers[10];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}

console.log("The largest number is:", largestNumber)

//Exercise 4: while loop

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

number = 2; // Start with the first even number

while (number <= 20) {
  console.log(number);
  number += 2; // Increment by 2 to get the next even number
}

 sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum); // Output: 5050

let k = 5;
while (k <50) {
    console.log(k);
    k += 5;
}

//exercise 5: Do while loops

let f = 1;
do {
    console.log(f);
    f++;
} while (f <= 10)

     sum = 0;
    var l = 1;

    do {
        sum += l;
        l++;
    } while (i <= 100);
    console.log("The sum of numbers from 1 to 100 is: " + sum);

    var number;
    var minimum = 1;
    var maximum = 20
    window.prompt("Please enter a number between 1 and 20");
    do {
        if (number >= minimum && number <= maximum)
            break;
        else(window.prompt("Invalid input, please enter a number between 1 and 20 "));
    }
    while (number < minimum || number > maximum);

    function guessNumber () {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let userGuess;
        
        do {
            userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

            if (isNaN(userGuess)) {
                alert("Invalid input. Please enter a number.");
            }else if (userGuess < randomNumber) {
                alert("Too low! Guess again.");
            }else if (userGuess > randomNumber) {
                alert("Too high! Guess again.");
            }
        }while (userGuess !== randomNumber);

        alert('Congratulations! You guessed the number ${randomNumber} correctly!');
    }

    guessNumber();