// by value and by refrence 

//by value (primitives)
var a = 10;
var b = a;
console.log("by value (primitives)");
console.log("a:"+a+",b:"+b);
b = 20;
console.log("a:"+a+",b:"+b);


//by refrence (all objects, incliding functions)
console.log("by refrence (all objects, incliding functions)")
var x = {"Name": "Pushkar"}
var y = x;


console.log("x:"+x.Name+",y:"+y.Name);
y.Name = "Ram";   //Mutate
console.log("x:"+x.Name+",y:"+y.Name);


//by refrence as parameter
console.log("by refrence as parameter");
function changeName(Obj){
    Obj.Name = "kumar";
}

changeName(y);

console.log("x:"+x.Name+",y:"+y.Name);
