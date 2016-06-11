// require gulp
var gulp = require('gulp'),
	concat = require("gulp-concat"),
	cssmin = require("gulp-minify-css"),
	rename = require("gulp-rename"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	autoprefixer = require("gulp-autoprefixer"),
	//templateCache = require('gulp-angular-templatecache');
	merge = require('merge-stream');

// default task
gulp.task('default', ['scripts', 'styles', 'watchScripts', 'watchStyles']);

// script task
gulp.task('scripts', function(){
	return gulp.src([
		'./src/js/lib/angular.js',
		'./src/js/lib/angular-ui-router.js',
		'./src/js/lib/angular-animate.js',
		//'./src/js/lib/moment.js',
		'./src/js/lib/hotkeys.min.js',
		'./src/js/app.js',
		//'./src/js/templates.js',
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
			//'./src/css/lib/google-font.css',
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

// html template cache
// gulp.task('html', function () {
// 	return gulp.src('./src/html/*.html')
// 		.pipe(templateCache({module: "science"}))
// 		.pipe(gulp.dest('./src/js/'));
// });

gulp.task('watchStyles', function(){
	gulp.watch('./src/css/*.scss', ['styles']);
});

gulp.task('watchScripts', function(){
	gulp.watch('./src/js/*.js', ['scripts']);
	gulp.watch('./src/js/**/*.js', ['scripts']);
});