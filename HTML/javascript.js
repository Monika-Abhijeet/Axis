// alert("Good Evening");

function changeName() {
  document.getElementById("demo").innerHTML = "Monika Abhijeet";
}

function changeColor(color) {
  document.getElementById("demo").style.color = color;
}

function hideText() {
  document.getElementById("hide").style.display = "none";
}

var x = 10;
var x = " hello";
let y = 10;
y = "hello";
let z;
const pi = 3.14;

{
  var x = 30;
  let y = 30;
  //   console.log("inside block x", x);
  //   console.log("inside block y", y);
}

// console.log("outside block x", x);
// console.log("outside block y", y);
// console.log("value of pi", pi);

let names = ["Monika", "Abhijeet", "Gaanavi"];
for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
}

let employees = [
  {
    firstName: "monika",
    lastName: "Abhijeet",
    designation: "Manager",
    salary: 60000,
  },
  {
    firstName: "Sharad",
    lastName: "Gudi",
    designation: "Employee",
    salary: 20000,
  },
  {
    firstName: "Gaanavi",
    lastName: "Abhijeet",
    designation: "CEO",
    salary: 90000,
  },
  {
    firstName: "Abhijeet",
    lastName: "Pat",
    designation: "CTO",
    salary: 80000,
  },
];

for (let i = 0; i < employees.length; i++) {
  // console.log(employees[i].firstName + "-" + employees[i].designation)

  console
    .log
    // `Employee name is ${employees[i].firstName} and last name is ${employees[i].lastName},designation is ${employees[i].designation}`
    ();
}
// num1, num2 are parameters
// addNumbers is a function name
var num1 = 20,
  num2 = 10;
function addNumbers() {
  let sum = num1 + num2;
  document.getElementById("operations").innerHTML = sum;
}

function subtractNumbers() {
  let diff = num1 - num2;
  document.getElementById("operations").innerHTML = diff;
}

function multiplyNumbers() {
  let mul = num1 * num2;
  document.getElementById("operations").innerHTML = mul;
}
function divideNumbers() {
  let div = num1 / num2;
  document.getElementById("operations").innerHTML = div;
}

function printInputText(event) {
  //   console.log(event.target.value);
}

const person = {
  firstName: "Monika",
  lastName: "Abhijeet",
  id: 1,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
// console.log(person.firstName, person.fullName());

function printMouseOver() {
  //   console.log("ypu moved mouse on button");
}

function validateForm(e) {
  e.preventDefault();
  console.log("form validation called");
  let name = document.forms["myForm"]["firstName"].value;
  if (name === "") {
    alert("please fill the firstname");
  } else {
    alert(`you typed ${name}`);
  }
}

// local storage
// storing a value in local storage

localStorage.setItem("name", "Monika");
// console.log(localStorage.getItem("name"));

// localStorage.removeItem("n ame");

// storing value in session storage

function setStorage() {
  sessionStorage.setItem("email", "monika@gmail.com");
  sessionStorage.setItem("phone", "787979797");
}
// console.log(new Date(2023, 0, 1).toUTCString());
document.cookie = "name=monika;expires=" + new Date(2023, 0, 1).toUTCString();

// function for adding numbers

function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
// arrow function
const addTwoNumbersArrow = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};

const addTwoNumbersArrow2 = (num1, num2) => num1 + num2;

const multiplyByTwo = (num) => num * 2;

// console.log(multiplyByTwo(10));

// Array methods

// 1. toString()
const fruits = ["apple", "starfruit", "mango", "strawberry", "kiwi"];
console.log(fruits.toString());

// 2. push
fruits.push("Banana");
console.log(fruits);

// 3.pop
fruits.pop();
fruits.pop();
console.log(fruits);

// 4.array.length
console.log(fruits.length);

// 5.concat
const vegetables = ["tomato", "onion", "carrot", "beans"];
const dryfruits = ["cashew", "almond", "raisins", "walnut"];
let allItems = fruits.concat(vegetables, dryfruits);

// 6.sort
console.log(allItems.sort());

// 7. reverse
console.log(allItems.reverse());

// 8.sorting a number
const marks = [49, 98, 100, 1, 25, 87];
console.log(
  marks.sort(function (a, b) {
    return a - b;
  })
);

const numbers = [1, 2, 3, 4, 5, 6];
const squareNumbers1 = [];
for (let i = 0; i < numbers.length; i++) {
  squareNumbers1.push(numbers[i] * numbers[i]);
}
console.log(squareNumbers1);

// array map
const squareNumbers = numbers.map((value) => {
  return value * value;
});
console.log(squareNumbers);

// filter
const numberList = [65, 87, 12, 40, 4, 99];
let passMarks = numberList.filter((num) => {
  return num >= 35;
});

let failMarks = numberList.filter((num) => {
  return num < 35;
});
console.log(passMarks);
console.log(failMarks);

const greaterSalary = employees.filter((emp) => {
  return emp.salary > 70000;
});

console.log(greaterSalary);

// includes
console.log(numberList.includes(17));

// String methods
let name = "monika abhijeet";
console.log(name.length);

// string replace
let text = "i like frontEND and backEND coding";
let newText = text.replace(/END/g, "end");
console.log(text, newText);

// to uppercase
console.log(text.toUpperCase());
console.log(text.toLowerCase());

const fname = "monika";
const lname = "abhijeet";
console.log(fname.concat(" ", lname));
