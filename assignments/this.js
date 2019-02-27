/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - will refer to the window object, usually default to this
* 2. Implicit binding - will refer to the object to the left of the . notation 
* 3. new Binding - will refer to the new object that is created 
* 4. Explicit Binding - pass to this what it should be referring to using methods like call, apply and bind
*
* write out a code example of each explanation above
*/

// Principle 1


function sayHello(greet) { // code example for Window Binding
    console.log(this);
    return greet
}

// sayHello("Hey there!")

// Principle 2

const obj = { // code example for Implicit Binding
    question: "Where",
    findName: function(name) {
        console.log(`${this.question} is ${name}?`);
        console.log(this);
    },
    findLocation: function(location) {
        console.log(`He is located in ${location}`);
        console.log(this)
    }
}

obj.findName('John')
obj.findLocation('Paris')

// Principle 3

function MyDogs(trait) {// code example for New Binding
    this.name = trait.name,
    this.type = trait.type,
    this.hasTail = trait.hasTail;
}

const dog1 = new MyDogs({
    name: "Spot",
    type: "beagle",
    hasTail: true
});

console.log(dog1)
// Principle 4
const person = {
    name: "Sam"
}
const personInfo = [20, "Australia"]
function introduce(info1, info2) {// code example for Explicit Binding
return `My name is ${this.name}, I am ${info1} years young. I live in ${info2}`
}
console.log(introduce.call(person,...personInfo))
