/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding: The most common of bindings and basically a referencing binding that is to the left of where the functin is called. 
* 2. Explicit Binding: The ability to reference functions from outside the scope of the object. You're explicitly setting what the this keyword object is referencing. 
* 3. New Binding: This is when you invoke the 'new' keyword and a 'new' this ojbect is created and bound to the new object being constructed. 
* 4. Window Binding: The instance where you haven't used any of the binding rules, then by default the this keyword references the window object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this); 

// Principle 2

// code example for Implicit Binding

const person = {
	name: "Joey",
	age: 33,
	intro: function() {
		return console.log(`My name is ${this.name}, I'm ${this.age} years old!`)
	} 
};

console.log(person.intro())

// Principle 3

// code example for New Binding

function House(att) {
	this.bedrooms = att.bedrooms;
	this.bathrooms = att.bathrooms; 
	this.price = att.price;
}

const brickHouse = new House( {
	bedrooms: 5,
	bathrooms: 3.5,
	price: 120000
});

console.log(brickHouse);

// Principle 4

// code example for Explicit Binding

let ageExtender = function(years) {
	return console.log(`In ${years} years I'll be ${this.age + years} years old!`) 
}

console.log(ageExtender.call(person, 10));