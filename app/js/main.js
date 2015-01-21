"use strict";
// # 1 
function calling(){
	var person = {firstName: 'Bob', lastName: 'Smith', age: 32};
	console.log(person);
	return;
}



// #2 
function callingAgain(){
	var person = {firstName: 'Bob', lastName: 'Smith', age: 32, rollno: 12};
	console.log(person);
	delete person['rollno'];
	console.log(person);
	return;
}

// #3
// function startWithA(){
// 	var person = {firstName: "Bob", lastName: "Smith", age: 32, rollno: 12};

// }

// #4
function cylinder(radius, height){
	if(isNaN(radius) || isNaN(height)){
		throw 'must use only numbers';
	}
	var volume = 3.14159*radius*radius*height;
	console.log(volume);
	return;
}

// #5


function people(a, b, c, d, e, f){

var person = {
firstName: a,
lastName: b,
age: c,
friends: []
};

person.friends.push(d, e, f);

return person;
}


// #6
function nameList(x, y) {
var person = {
firstName: a,
lastName: b,
age: c,
friends: []
};
person.friends.push(y)
return names
}
