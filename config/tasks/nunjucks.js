const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const gulpData = require("gulp-data");
const { browserSync } = require("../tasks/browserSync");
const { config } = require("../config");
const { data } = require("../../src/data/index");

exports.nunjucks = gulp.task("nunjucks", () => {
    return gulp
        .src(config.src + config.nunjucks.src)
        .pipe(gulpData(() => data))
        .pipe(
            nunjucksRender({
                path: ["src/views"],
            })
        )
        .pipe(gulp.dest(config.build + config.nunjucks.dest))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        );
});
