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
function addNumbers(num1, num2) {
  return num1 + num2;
}

// 5,10 are arguments
let sum = addNumbers(5, 10);
console.log(sum);
