var gulp = require('gulp');
var browsersync = require('browser-sync').create();

gulp.task('browser-sync', function(){
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(["./*.html", "./css/*.css"]).on('change', browsersync.reload);
})
