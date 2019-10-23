const { src, dest, series } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

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

exports.minCSS = minCSS;
exports.renameCSS = renameCSS;
