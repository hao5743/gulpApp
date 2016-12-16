### gulp安装
* 安装gulp

`
$ npm install --global gulp
`

`
$npm install --save-dev gulp
`

* 新建gulpfile.js

```
var gulp = require('gulp');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
````

* 运行gulp

```
$ gulp
```

默认的名为default的task会在这里运行。

### gulp-jshint
安装gulp-jshint

```bash
npm install jshint gulp-jshint --save-dev
```
在gulp.js中添加如下代码：

```js
var jshint = require('gulp-jshint');
gulp.task('lint',function(){
    gulp.src('app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
```
接下来执行gulp命令：

```bash
$ gulp lint
```
这个任务的含义是使用jshint插件，检查‘app/js/*.js’文件中的语法错误，并显示检测报告。

JSHint开源项目作为JSLint的一个分支，用来检查javascript中的语法错误，在grunt和grup中都有这个插件。

它有两种配置方式

* 使用`.jshintrc`配置文件
* 在`package.json`中添加变量,并在gulp.js中引用
比如：

```js
//package.json
{
  "jshintConfig":{
    "undef": true,
    "unused": true,
    "predef": [ "MY_GLOBAL", "ads" ] // 声明几个全局变量
  },
  "author": "wenzi",
  "license": "ISC"
}

//gulpfile.js
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var packageJSON  = require('./package');
var jshintConfig = packageJSON.jshintConfig;
jshintConfig.lookup = false;
// 根据jshintConfig的规则检测index.js文件
gulp.task('default', function(){
    gulp.src('./index.js')
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter('default'));
})
```
配置选项看这里的[文档](https://github.com/jshint/jshint/blob/master/examples/.jshintrc)

简单说明几个配置选项：

* evil 为true，表示允许使用eval方法
* maxerr 默认50，表示多少错误时，jshint停止分析代码
* plusplus 如果为true，不允许使用++或--操作
* undef 如果为true，表示所有的局部变量必须先声明才能定义
* passfail 如果为true，遇到第一个错误就终止
* bitwise 如果为true，禁止使用位运算符



