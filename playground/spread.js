/**
 * Created by IrshaadTechnologies on 5/12/2017.
 */
function add (a, b) {
    return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greetWithAge(name, age) {
    console.log('hello ' + name + ', you are ' + age);
}

//Hi Andrew, you are 25
greetWithAge(...person);

//Hi Jen, you are 29
greetWithAge(...personTwo);

var name = ['Mike', 'Ben'];
var final = ['Andrew', ...name];

final.forEach(
    (name)=>{
        console.log('Hi ' + name);
});

