/*import a JS file into another JS file. When using "require" no need to specify '.js'
  'require' is supported by node.js (we are using throught Gulp) so it only works in our file 'gulpfile.js'
  This file is going to be downloaded into people's browser so instead we can use a tool named webpack to support 'require'
*/

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
