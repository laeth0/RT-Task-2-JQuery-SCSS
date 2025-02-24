import gulp from "gulp";
import sassPkg from "gulp-sass";
import * as dartSass from "sass";
import cleanCSS from "gulp-clean-css";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import browserSyncPkg from "browser-sync";

const sass = sassPkg(dartSass);
const browserSync = browserSyncPkg.create();

const paths = {
    styles: {
        src: "./training-project/resources/assets/sass/**/*.scss",
        dest: "./training-project/public/css/"
    },
    scripts: {
        src: "./training-project/resources/assets/js/*.js",
        dest: "./training-project/public/js/"
    },
    images: {
        src: "./training-project/resources/assets/images/**/*.{png,jpg,gif,svg,ico}",
        dest: "./training-project/public/img/"
    },
    fonts: {
        src: "./training-project/resources/assets/fonts/*",
        dest: "./training-project/public/fonts/"
    }
};

// Compile Sass & Minify CSS
async function styles() {
    const autoprefixer = (await import("gulp-autoprefixer")).default;
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Concatenate & Minify JS
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

// Optimize Images
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

// Copy Fonts
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

// Watch files for changes
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: "./training-project/public"
        }
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch("training-project/public/*.html").on("change", browserSync.reload);
}

// Define tasks
export { styles, scripts, images, fonts, watchFiles };

// Default Task
export default gulp.series(gulp.parallel(styles, scripts, images, fonts), watchFiles);
