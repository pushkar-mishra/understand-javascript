
/* This program demonstrates the behaviour off event loop and Javascript Engine */ 
var WaitThreeSeconds = function(){
    var ms = 5000 + new Date().getTime();
    
    while (new Date() < ms){}
        console.log("5 Seconds over!")    
    
}
function clickHandler(){
    console.log("Clicked!")
}

document.addEventListener('click',clickHandler);
WaitThreeSeconds();
console.log("Finished execution!");