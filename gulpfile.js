/**
 * Import Gulp Needed Packages to work with AngularJS
 * Features:
 * - Live Server
 * - Support SCSS
 * - Gulp
 * - JS Bundler with CommonJS
 * - CSS & JS Minification
 * - Cache Busting
 * - Live Reload
 * - JS Hint
 */

var gulp = require("gulp");
var webserver = require("gulp-webserver");
var del = require("del");
var sass = require("gulp-sass");
var jshint = require("gulp-jshint");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");
var gutil = require("gulp-util");
var ngAnnotate = require("browserify-ngannotate");
var CacheBuster = require("gulp-cachebust");
const livereload = require("gulp-livereload");
var cachebust = new CacheBuster();

/**
 * jshint task
 */

gulp.task("jshint", function(cb) {
  gulp
    .src("./src/modules")
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("jshint-stylish"));
  cb();
});

/**
 * Deletes the dist folder
 */

gulp.task("clean", function(cb) {
  del(["dist"]).then(() => cb());
});

/**
 * Sub Cleaning Tasks
 */

gulp.task("clean-build-js", function(cb) {
  del(["./dist/bundle.*"]).then(() => cb());
});

gulp.task("clean-build-css", function(cb) {
  del(["./dist/style.*"]).then(() => cb());
});

gulp.task("clean-build-template-cache", function(cb) {
  del(["./dist/partials.*"]).then(() => cb());
});

/**
 * Builds SCSS files
 */

gulp.task("build-css", function(cb) {
  return gulp
    .src("./src/assets/scss/*")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(cachebust.resources())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist"))
    .pipe(livereload());
});

/**
 * Build a minified Javascript bundle
 */

gulp.task("build-js", function(cb) {
  var b = browserify({
    entries: "./src/modules/app.module.js",
    debug: true,
    paths: ["./src/modules/**/*.js"],
    transform: [ngAnnotate]
  });

  return b
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(cachebust.resources())
    .pipe(
      sourcemaps.init({
        loadMaps: true
      })
    )
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .on("error", gutil.log)
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist"))
    .pipe(livereload());
});

/**
 * Fills in the Angular template cache
 */

gulp.task("build-template-cache", function(cb) {
  var ngHtml2Js = require("gulp-ng-html2js");
  concat = require("gulp-concat");

  return gulp
    .src("./src/modules/**/*.view.html")
    .pipe(
      ngHtml2Js({
        moduleName: "UsersApp.Partials",
        prefix: "/modules/"
      })
    )
    .pipe(concat("partials.js"))
    .pipe(cachebust.resources())
    .pipe(
      sourcemaps.init({
        loadMaps: true
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist/"))
    .pipe(livereload());
});

/**
 * CacheBust References
 */

gulp.task("code-cache-bust", function(cb) {
  gulp
    .src("./src/index.html")
    .pipe(cachebust.references())
    .pipe(gulp.dest("dist"));
  cb();
});

/**
 * Build Task
 */

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel(
      "build-css",
      gulp.series("jshint", gulp.parallel("build-template-cache", "build-js"))
    ),
    "code-cache-bust"
  )
);

/**
 * Watch Task
 */

gulp.task(
  "watch",
  gulp.series("build", function(cb) {
    gulp.watch(
      "./src/modules/**/*.js",
      gulp.series(["clean-build-js", "jshint", "build-js", "code-cache-bust"])
    );
    gulp.watch(
      "./src/modules/**/*.view.html",
      gulp.series([
        "clean-build-template-cache",
        "jshint",
        "build-template-cache",
        "code-cache-bust"
      ])
    );
    gulp.watch(
      "./src/assets/scss/*",
      gulp.series(["clean-build-css", "build-css", "code-cache-bust"])
    );
    cb();
  })
);

/**
 * Launches a Webserver
 */

gulp.task("webserver", function() {
  gulp.src(".").pipe(
    webserver({
      livereload: true,
      directoryListing: true,
      open: "http://localhost:8000/dist/index.html"
    })
  );
});

/**
 * Start the Dev Server
 */

gulp.task("dev", gulp.series(["watch", "webserver"]));
