var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',     //change the auto-generated background image url
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', function() {  // To keep our sprite clean we delete any auto-generated sprite folder before creating a new one
	return del(['./app/temp/sprite', './app/assets/images/sprites']); //we del the auto-generated & the copy (copySpriteGraphic)
});

gulp.task('createSprite', ['beginClean'], function() {	  // We add a dependency (createSprite should not run until beginClean is done)
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')  // allows us to acess any sub-folders and grab any files with an .svg extension
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

// We create a new task to let gulp copy our generated sprite.css file into our modules folder (then we import the file in style.css)
gulp.task ('copySpriteCSS', ['createSprite'], function() {  //we create a dependency [] saying createSprite has to run 1st
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))	// we rename the file before it gets copied into the modules folder 
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'],  function() {
	return del('./app/temp/sprite');
});

// we create a new task to automatically run the 2 other tasks above. So we don't have to run 2 but only 1 task in comand line
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);  

