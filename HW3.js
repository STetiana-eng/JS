/*Task - 1
  Replace the "for" loop with a "while" loop

for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}
*/
let i = 0
while (i <8 ){
    i++
    console.log("число-" + i);
}

/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

let sum = 0
for (let y = 0; y <= 50; y++ ){
    if (y % 3 !== 0){
        sum +=y
    }
    console.log(sum)
}

let a = 0;
sum1 = 0;
while (a <=50){
    if (a % 3 !== 0){
        sum1+=a
    }
    a++
    console.log(sum1)
}

let x = 0;
sum = 0
do {
   if ( x % 3 !==0){
    sum+=x
   }
   x++;
   console.log(sum)
} while (x <=50)

/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/

let firstNumber = -100;
let secondNumber = 250;
function calculateSum(firstNumber, secondNumber) {
    let sum = 0;

    if (firstNumber <= secondNumber) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            sum += i;
        }
    } else {
        console.log("Invalid number");
    }

    return sum;
   
}

let result = calculateSum(firstNumber, secondNumber);

console.log(`Sum of numbers from ${firstNumber} to ${secondNumber} is: ${result}`);


/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/

let seconds = 10;
for (let seconds = 10; seconds >= 0; seconds-- ){
    console.log(seconds + " seconds " + "left ")
    }

/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */

let d = 7;
do {
    console.log(d)
    d+=7
 } while (d <= 49)

/* Task - 6 (Not required)
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

/* Task - 7 (Not required)
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/

let bucket = 5; //capacity of one bucket
let initialBathState = 0; //the initial value of the amount of water in the bathroom
let bathCapacity = 60; //
