/* issues with automatic semicolon interstion */

function getPerson() {
 
    return {
        firstname: 'Pushkar'
    }
    
}

console.log(getPerson()); // Outputs Object {firstname: "Pushkar"}


function getPerson1() {
 
    return //Automatic ; insertion (return;)
    {
        firstname: 'Pushkar'
    }
    
}

console.log(getPerson1()); // Outputs undefined