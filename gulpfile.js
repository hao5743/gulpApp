var gulp = require('gulp');
var jshint = require('gulp-jshint');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log('gulp');
});

gulp.task('lint',function(){
    gulp.src('app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});