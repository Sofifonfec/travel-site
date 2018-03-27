var gulp = require('gulp'); 
var postcss = require('gulp-postcss');  //post processor
var autoprefixer = require('autoprefixer');	//plugin 
var cssvars = require('postcss-simple-vars'); //plugin to let us create variables like $mainBlue: #2f5572
var nested = require('postcss-nested'); //plugin to let us nest our CSS code 
var cssImport = require('postcss-import'); //to import other plugins or files 
var mixins = require('postcss-mixins');  //to simplify media queries

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo) {        
			console.log(errorInfo.toString()); 
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});