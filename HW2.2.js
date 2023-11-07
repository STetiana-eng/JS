// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */

let cat_weight = 5;
  if (cat_weight <= 5)
  {console.log("the cat is small and still needs to be fed")} 
  else if (cat_weight > 5)
  {console.log("cat is very fluffy and needs to be combed")} 
  else {
   console.log("Wrong data")
 }


/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */
var age = 17;
if (age >= 18 && age<=50)
{console.log("hire")}
else {console.log("not hire")}



/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */

var grade = "A"
 if (grade == "A" || grade == "B"){
   console.log("pass")}
else if (grade == "C" || grade == "D")
   {console.log("retake")}
else if (grade == "E")
   {console.log("expulsion")}
else {console.log("Try again")}


/* Task - 4

 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */
const prompt = require('prompt-sync')({sigint: true});
const numberToGuess = Math.floor(Math.random() * 10) + 1;
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  let guess = prompt('Guess a number from 1 to 10: ');
  guess = Number(guess);
  if (guess === numberToGuess) {
    console.log('Congrats, you got it!');
    foundCorrectNumber = true;
  } else {
    console.log('Sorry, guess again!');
  }
}

 /* Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */
let height1 = 141;
let atraction1 = (height1 < 140) ? "Заборонено на атракціон" :  "Проходьте, будь ласка!";
 console.log(atraction1);


/* Task - 6

Rewrite if..else using several ternary operators '? 

if (height < 50) 
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else { 
                console.log("Permit - All"); }
*/

// Терарний оператор
let height = 80;
let atraction = (height >= 50 && height < 80) ? "Permit - attraction №1" :   (height >= 80 && height < 120) ? "Permit - attraction №1 or №2": "Permit - All";
 console.log(atraction);

 

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */

 let day_number = 1
 if (day_number === 1 )
{console.log ("It is Monday")}
else if (day_number === 2)
{console.log("It is Tuesday")}
else if (day_number === 3)
{console.log("It is Wednesday")}
else if (day_number === 4 )
{console.log("It is Thursday")}
else if (day_number === 5 )
{console.log("It is Friday")}
else if (day_number === 6 )
{console.log("It is Saturday")}
else if (day_number === 7 )
{console.log("It is Sunday")}
else {console.log("Wrong data")}
 

/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */
let month = 1
if (month === 12 || month === 1 || month === 2)
{console.log ("It is winter")}
else if (month === 3 || month === 4 || month === 5)
{console.log("It is spring")}
else if (month === 6 || month === 7|| month === 8)
{console.log("It is summer")}
else if (month === 9 || month === 10 || month ===11)
{console.log("It is autum")}
else {console.log("Wrong data")}


 /* Task - 9
 Rewrite the "switch" into an "if"
 
 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
 */
 let browser = "Firefox"
 if (browser == "Edge")
 {console.log("You've got the Edge!")}
 else if (browser == "Chrom" || browser == "Firefox" || browser == "Safari" || browser == "Opera")
 {console.log('Okay we support these browsers too')}
 else {console.log('We hope that this page looks ok!')}


/* Task - 10
Rewrite "if" into "switch" 

let age = 16;
switch (age){
case  = 16:
    console.log( "We cant hire u" );
    break
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/
let age = 15;
 switch (true) {
     case age < 16: console.log ("We cant hire u"); break;
     case age >= 18: console.log ("U can take full time job"); break;
     case (age == 16)  || (age ==17): console.log ('U can take part time job'); break;
 }


/* Task - 11
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/
const prompt = require('prompt-sync')();

const name2 = prompt('What is your name?');
if (name2 == "Admin")
 const password = prompt('What is password?')
          if (password == "TheMaster")
          {console.log("Welkome!")}
          else {console.log("Wrong password")}
else (name2 =="")
 {console.log ("CAncel")}