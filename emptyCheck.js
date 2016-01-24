
/* This program demonstrates empty check */ 

var myVar;

if(myVar){
    console.log("Something is there!")    
}
else {
    console.log("Empty or undefined!")    
}
myVar = "Something";
if(myVar){
    console.log("Something is there!")    
}
else {
    console.log("Empty or undefined!")    
}


myVar = 0; //Bolean(0) returns false
if(myVar || myVar === 0){
    console.log("Something is there!")    
}
else {
    console.log("Empty or undefined!")    
}