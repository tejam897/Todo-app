// Gulp.js configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var KarmaServer = require('karma').Server;
var browserSync = require('browser-sync').create();
var gulpsync    = require('gulp-sync')(gulp);

gulp.task("serve",function(){
    browserSync.init({
    port:8000,
        server: {
            port: 8000,
            baseDir: "./"
        }
    });
})

gulp.task("test",function(){
	new KarmaServer({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, function(err) {
		if(err == 1) {
			console.error("unit tests have failed...");
//			process.exit(1);
		}
		else
			done();
	}).start();
})

gulp.task("compile_scss",function(){
    gulp.src(["./src/scss/*.scss"])
		.pipe(sass())
		.on('error', function(error) {
			console.log(error);
	});
})

gulp.task("reload", function() {
    console.log("reloading")
	browserSync.reload();
});

gulp.task('watchSrc',function(){
    gulp.watch(["./src/**/**.**","./src/**/**.**.**","app.js","index.html"],gulpsync.sync(["reload"]));
})

gulp.task('default',["compile_scss","watchSrc","test","serve"])