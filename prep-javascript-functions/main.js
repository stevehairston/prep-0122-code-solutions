function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return name;
}

var name = getGreeting('World');
console.log('Hello', name);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addxs5 = addAndMultiplyBy5(10, 5);
console.log(addxs5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var xdiv5 = multiplyAndDivideBy5(35, 10);
console.log(xdiv5);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var subtwo = subtractTwoNumbers(22, 7);
console.log(subtwo);

function getCircleCircumference(radius) {
  return 2 * 3.141592653589793 * radius;
}

var radius = getCircleCircumference(5);
console.log(radius);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullname = getFullName('Juan', 'Ramirez');
console.log(fullname);

function cube(number) {
  return number * number * number;
}

var number = cube(5);
console.log(number);
