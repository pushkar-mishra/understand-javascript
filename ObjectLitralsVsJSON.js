/* Using object litrals */

var person = {};
person = {fName: "Ram", lName: "Mishra", address: 
{street: "11th main road",phone: "+1-1234567890"}
}

console.log("Person:"+person);
console.log("JSON.stringify(person):"+JSON.stringify(person))

// JSON is subset of Object litrals, JSON is more strict, Properties has to be wrapped in quotes. 
var jsonValue = JSON.parse('{"fName": "Ram", "lName": "Mishra", "address": {"street": "11th main road","phone": "+1-1234567890"}}')

console.log("JOSN Value:"+jsonValue);

console.log(jsonValue.fName);