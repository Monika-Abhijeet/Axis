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
  console.log("inside block x", x);
  console.log("inside block y", y);
}

console.log("outside block x", x);
console.log("outside block y", y);
console.log("value of pi", pi);

let names = ["Monika", "Abhijeet", "Gaanavi"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let employees = [
  {
    firstName: "monika",
    lastName: "Abhijeet",
    designation: "Manager",
  },
  {
    firstName: "Sharad",
    lastName: "Gudi",
    designation: "Employee",
  },
  {
    firstName: "Gaanavi",
    lastName: "Abhijeet",
    designation: "CEO",
  },
  {
    firstName: "Abhijeet",
    lastName: "Pat",
    designation: "CTO",
  },
];

for (let i = 0; i < employees.length; i++) {
  // console.log(employees[i].firstName + "-" + employees[i].designation)

  console.log(
    `Employee name is ${employees[i].firstName} and last name is ${employees[i].lastName},designation is ${employees[i].designation}`
  );
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
  console.log(event.target.value);
}

const person = {
  firstName: "Monika",
  lastName: "Abhijeet",
  id: 1,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.firstName, person.fullName());

function printMouseOver() {
  console.log("ypu moved mouse on button");
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
