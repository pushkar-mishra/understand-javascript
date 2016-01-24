
/* This program demonstrates basic uses of Object */ 

var person  = new Object();

person["fName"] = "Pushkar";
person["lName"] = "Mishra";

var fNameProperty = "fName";

console.log(person);
console.log(person[fNameProperty]);

console.log(person.lName);

person.address = new Object();

person.address.street = "11th main road";
person.address.phone = "91-1234567890"

console.log(person);

console.log(person["address"]);  //outputs: Object {street: "11th main road", phone: "91-1234567890"}

//Recomended
console.log(person.address); //outputs: Object {street: "11th main road", phone: "91-1234567890"} 