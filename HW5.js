/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/


let person = {
    firstname: "Ted",
    lastname: "Tolk",
    age: 25,
    getInfo: function () {
    for (const key in this) {
        if (typeof this[key] !== 'function') {
            console.log(`${key}: ${this[key]}`);
        }
    }
}
}  
person.getInfo();

let person2 = {
    name: "Cris",
    surname: "Klark",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  console.log(person2.fullName)

/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
   додавши додаткову властивість до об'єкта "person". 
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/


/* Task - 3 
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/
function isARobot(obj) {
    return obj && typeof obj === 'object' && 'batteryEnergy' in obj;
}
const robot = { batteryEnergy: 100, model: 'RobotModel1' };
console.log (isARobot(robot)); 

або

function isARobot(obj) {
    return obj !== null && typeof obj === 'object' && 'batteryEnergy' in obj;
}

/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/