
var person = {
  firstName: 'Steve',
  lastName: 'Hairston',
  hobby: 'theater-going'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is ', fullName);

person.job = 'IT Guy';
console.log('The person\'s current job is as an', person.job);

person.previousJob = 'Clerk';
console.log('The person previously worked as a', person.previousJob);

console.log(person);
