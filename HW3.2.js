/* Task - 0
    Create a function task1Func which will always return true
    
*/

function task1Func()
{return true;
}
let result = task1Func()
console.log(result)

/* Task 1
    Write a function min(a, b) that returns the lesser of two numbers a and b.

    For example,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
*/

function min(a, b) {
    if (a > b) {
        console.log(b);
    } else if (a < b) {
        console.log(a);
    } else if (a === b) {
        console.log("These numbers are equal");
    } else {
        console.log("Wrong data");
    }
}

let result1 = min(2, 5);
let result2 = min(3, -1);
let result3 = min(1, 1);

/* Task 2
    Write a function pow(x, n) that returns the number x raised to the power of n. 
    In other words, it multiplies the number x by itself n times and returns the result.

    For example,
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
*/
function pow(x,n){
    return x**n
}
 let result4 = pow(3,2);
 let result5 = pow(3,3);
 let result6 = pow(1,100)

 console.log(result4)
 console.log(result5)
 console.log(result6)

/* Task 3
    Remake a function from the task 2
    * just make second parameter to have a default value equal 5

*/
function pow(x){
    return x**5
}
 let result7 = pow(3);
 let result8 = pow(1);
 console.log(result7)
 console.log(result8)

/* Task 4
   Create a variable  which will return a function
    which will take parameter pet as a number (where 1 stands for pizza, 2 is spagetti and 0 is other)
    and returns text ee.g. "My lunch for today is pizza"
    Use function expression with arrow function notation
*/

const chosepizza = (pet) => {
    return () => {
        let food;

        switch (pet) {
            case 1:
                food = "pizza";
                break;
            case 2:
                food = "spaghetti";
                break;
            default:
                food = "other";
        }

        return `My lunch for today is ${food}`;
    };
};

const gettext = chosepizza(1); 
console.log(gettext());
