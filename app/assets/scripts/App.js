var $ = require('jquery');
//var Person = require('./modules/Person'); // node js method
import Person from './modules/Person'; // js ES6 way

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

alert("ABC 123");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();
