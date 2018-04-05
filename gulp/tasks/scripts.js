// In this file we want to integrate webpack into our existing Gulp automation. 

var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback) {  //we create a task to run webpack automatically
	webpack(require('../../webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}
		
		console.log(stats.toString()); 
		callback();
	});   
});

// Then we add a gulp watch for our task 'scripts' in the file 'watch.js'