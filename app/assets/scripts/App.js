/*import a JS file into another JS file. When using "require" no need to specify '.js'
  'require' is supported by node.js (we are using throught Gulp) so it only works in our file 'gulpfile.js'
  This file is going to be downloaded into people's browser so instead we can use a tool named webpack to support 'require'
*/

import MobileMenu from './modules/MobileMenu';

var mobileMenu = new MobileMenu();


/*
var $ = require('jquery');
//var Person = require('./modules/Person'); //With Babel we can import modules using import (code below). Same for exports (see file Person.js)
import Person from './modules/Person';

class Adult extends Person {   //Adult will inherit all of the Person properties and add new specific ones like payTaxes
	payTaxes() {
		console.log(this.name + ' now owes $0 in taxes');
	}
}

alert('Fat test');

var john = new Person("John", "blue");
john.greet();

var jane = new Adult("Jane", "orange");
jane.greet();
jane.payTaxes();
*/
