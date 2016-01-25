function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);   
}

a();

//When you just invoke a function, this points to gobal variable. 
console.log(newvariable); // not good!, was attahed to global (this.newvariable = 'hello';).

b();

var c = {
    name: 'The c object',
    log: function() {
        //When attached to object, this poits to the object that contains it.
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();