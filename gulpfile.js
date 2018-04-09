// we import the newly created js files into the main gulpfile.js. Bcs we used 'require' we don't need to specify .js
require('./gulp/tasks/styles');
require('./gulp/tasks/watch'); 
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');
require('./gulp/tasks/modernizr');
require('./gulp/tasks/build');