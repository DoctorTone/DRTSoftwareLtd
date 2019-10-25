const { src, dest, series } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const terser = require("gulp-terser");

function minCSS() {
    return src("./assets/css/*.css")
        .pipe(cleanCSS())
        .pipe(dest("./assets/cssMin/"))
}

function renameCSS() {
    return src("./assets/cssMin/*.css")
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(dest("./assets/css/"))
}

function concatCSS() {
    return src(["./assets/css/vendor.min.css", "./assets/css/styles.min.css", "./assets/css/custom.min.css"])
        .pipe(concat("drt.min.css"))
        .pipe(dest("./assets/css"))
}

function minJS() {
    return src("./assets/js/*.js")
        .pipe(terser())
        .pipe(dest("./assets/minJS"))
}

function renameJS() {
    return src("./assets/minJS/*.js")
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(dest("./assets/js/"))
}

function concatJS() {
    return src(["./assets/js/vendor.min.js", "./assets/js/scripts.min.js", "./assets/js/custom.min.js"])
        .pipe(concat("drt.min.js"))
        .pipe(dest("./assets/js"))
}

exports.minCSS = minCSS;
exports.renameCSS = renameCSS;
exports.concatCSS = concatCSS;
exports.minJS = minJS;
exports.renameJS = renameJS;
exports.concatJS = concatJS;
exports.default = series(minCSS, renameCSS, concatCSS, minJS, renameJS, concatJS);
