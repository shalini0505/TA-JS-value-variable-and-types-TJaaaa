// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = +prompt(`write a number`)
if (number%2===0) {
  alert(`number is even`);
} else  {
  alert(`number is odd`)
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = prompt(`write a number`)
let num2 = prompt(`wite a number`)
if (num1 > num2) {
  alert(` ${num1} is greater`)
} else {
  alert(`${num2} is greater`)
}

// 3. Convert the above code using`?` terniary operator


let numA = prompt(`write a number`)
let numB = prompt(`wite a number`)
numA > numB ? alert(` ${numA} is greater then numB`):alert(`${numB} is grater then numA`)

  


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt(`write your house name`)
if ( houseName === "stark" ) {
  alert(`${houseName} winter is coming`);
} else if ( houseName ==="lannister" ) {
  alert(`${houseName} A lannister always pays his debt`);
} else {
  alert(`${houseName} all men must die`);
}





// 5. Convert the above code using`?` terniary operator

// let houseNames = prompt(`write your house name`)
// houseNames === "stark" ? alert(`${houseNames} winter is coming`): alert(`${houseNames} all men must die`)

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

  let months = prompt(`enter the name of months`);
switch (months) {
  case 1: january
    alert(`it has 31 days`);
    break;
  case 2: feb
    alert(`it has 28 days`);
    break;
  case 3: march
    alert(`it has 31 days`);
    break;
  case 4: april
    alert(`it has 30 days`);
    break;
  case 5: may
    alert(`it has 31 days`);
    break;
  case 6: june
    alert(`it has 30 days`);
    break;
  case 7: july
    alert(`it has 31 days`);
    break;
  case 8: august
    alert(`it has 31 days`);
    break;
  case 9: sept
    alert(`it has 30 days`);
    break;
  case 10: oct
    alert(`it has 31 days`);
    break;
  case 11: november
    alert(`it has 30 days`);
    break;
  case 12: december
    alert(`it has 31 days`);
    break;
  default:
    alert("match not found")
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let Salary = prompt(`enter your salary`);

switch (true) {
  case Salary <= 20000:
    
    alert(`in-hand amount ${Salary - ((Salary * 10) / 100)}`);
    break;
  case Salary <= 40000:
    
     alert(`in-hand amount ${Salary - ((Salary * 20) / 100)}`);
    break;
  case Salary <= 50000:
    
     alert(`in-hand amount ${Salary - ((Salary * 30) / 100)}`);
    break;
  default:
    alert("match not found")
  
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = prompt(`enter the marks obtained`)
if (`${marks} > 100`) {
  alert(`marks can't be greater than 100`);
} else if (`${ marks > 80 } && ${ marks < 100 } ` ) {
  alert(`grade A`);
} else if (`${ marks }> 50 && ${ marks } < 80`) {
  alert(`grade B`);
} else if (`${ marks }> 30 && ${ marks } < 50`) {
  alert(`grade C`)
} else if (`${ marks }> 0`) {
  alert(`grade D`)
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside?`)
switch (true) {
  case weather === `sunny`:
    alert(`Wear a T-shirt`);
    break;
  case weather === `rainy`:
    alert(`Don't forget to take your raincoat`);
    break;
  case weather === `hot`:
    alert(`Get a hanky`);
    break;
  case weather === `freezing`:
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`)
  
}