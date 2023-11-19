/* Task - 1
    Створіть масив (array1) з 5 любих елементівю
    Створіть функцію, яка буде повертати другий елемент з масиву
*/


 var array1 = [1,2,3,4, "Kate","Max"];
 function getsecondarray(arr){
    if (Array.isArray(arr)&& arr.length >=2) 
    return arr[1];
    else {
    return null}
 }
var secondelement = getsecondarray(array1)
console.log (secondelement)
/* Task - 2
    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")
*/

var array1 = [1,2,3,4, "Kate","Max"]
function addElementToArray(arr, newitem) {
    if (Array.isArray(arr) && newitem !== undefined) {
        arr.push(newitem); 
        return arr; 
    } else {
        return null; 
    }
}
const newArray = addElementToArray(array1,'New number');
console.log(newArray);


/* Task - 3
    Створіть другий масив (array2), потім створить функцію, яка отримує 2 масиви і повертає масив, що містить елементи з масивів array1 та array2
*/
var array1 = [1, 2, 3, 4, "Kate","Max"];
var array2 = [5, 6, 7, 8, "New"];
function combaintwoarrays(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        return arr1.concat(arr2); 
    } else {
        return null; 
    }
}
const mergedArray = combaintwoarrays(array1, array2);
console.log(mergedArray); 
