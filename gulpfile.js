var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'), // 自动加前缀
    watch = require('gulp-watch');

gulp.task('less', function () {
    gulp.src('less/romwe.less')
        .pipe(less())
        .pipe(concat('romwe.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 3 versions','> 0.1%'], // 兼容浏览器
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/'));

    gulp.src('less/romwe.less')
        .pipe(less())
        .pipe(concat('romwe.css'))
        .pipe(autoprefixer({
            browsers: ['last 3 versions','> 0.1%'],
            cascade: true,
            remove:true 
        }))
        .pipe(gulp.dest('dist/'));
});
 


gulp.task('watch', ['less-dev'], function () {
    gulp.watch(
        ['less/*'],
        ['less']
    );
});