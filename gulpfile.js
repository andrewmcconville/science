// require gulp
var gulp = require('gulp'),
	concat = require("gulp-concat"),
	cssmin = require("gulp-minify-css"),
	rename = require("gulp-rename"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	autoprefixer = require("gulp-autoprefixer"),
	merge = require('merge-stream');

// default task
gulp.task('default', ['scripts', 'styles', 'watch']);

// script task
gulp.task('scripts', function(){
	return gulp.src([
		'./src/js/lib/angular.js',
		'./src/js/lib/angular-ui-router.js',
		'./src/js/lib/angular-animate.js',
		'./src/js/lib/hotkeys.min.js',
		'./src/js/app.js',
		'./src/js/services/*.js',
		'./src/js/controllers/*.js',
		'./src/js/filters/appFilters.js'
		])
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public/'));
});

// styles task
gulp.task('styles', function(){
	var css = gulp.src([
			'./src/css/lib/typicons/typicons.min.css',
			'./src/css/lib/google-font.css',
			'./src/css/lib/hotkeys.min.css'
		])
		.pipe(cssmin());
	
	var scss = gulp.src('./src/css/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cssmin())
	;

	return merge(css, scss)
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('./public/'));
});

gulp.task('watch', function(){
	gulp.watch('./src/css/*.scss', ['styles']);
	gulp.watch('./src/js/*.js', ['scripts']);
	gulp.watch('./src/js/**/*.js', ['scripts']);
});