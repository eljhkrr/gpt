var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	optipng = require('gulp-optipng'),
	minifycss = require('gulp-minify-css'),
	minifyhtml = require('gulp-minify-html');

var options = ['-o5'];

gulp.task('minify-js', function(){
	gulp.src('src/js/*')
		.pipe(uglify())
		.pipe(gulp.dest('js'));
});

gulp.task('minify-css', function(){
	return gulp.src('src/css/*')
		.pipe(minifycss())
		.pipe(gulp.dest('css'));
});

gulp.task('minify-html', function(){
	gulp.src('src/*.html')
		.pipe(minifyhtml())
		.pipe(gulp.dest('.'));
});

gulp.task('imagemin', function(){
	gulp.src('src/images/*')
		.pipe(optipng(options))
		.pipe(gulp.dest('images'));
});

gulp.task('default', ['minify-css', 'minify-js', 'minify-html', 'imagemin']);
