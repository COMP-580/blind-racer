/**
 * Command list
 *  clean                 - cleans out the build directory
 *  compile-scss          - compiles the client scss from src/client/scss
 *  watch-scss
 *  minify-scss
 *  compile-img           - compiles the client images from src/client/img
 *  watch-img
 *  minify-img
 *  compile-html          - compiles the client html from src/client/html
 *  watch-html
 *  minify-html
 *  compile-client-ts     - compiles the client ts from src/client/ts
 *  watch-client-ts
 *  minify-client-ts
 *  compile-server-ts     - compiles the server ts from src/server/ts
 *  watch-server-ts
 *  minify-server-ts
 *  move-server-static    - move static server assets
 *  nodemon               - run a nodemon server using the compiled server in build/
 *  lint                  - typescript linter
 *  compile
 *  watch
 *  minify
 *  default               - defaults to watch
 */

let babelify = require("babelify");
let browserify = require("browserify");
let buffer = require("vinyl-buffer");
let cleanCSS = require("gulp-clean-css");
let decache = require("decache");
let fs = require("fs-extra");
let gulp = require("gulp");
let gutil = require("gulp-util");
let htmlmin = require("gulp-htmlmin");
let minifyImg = require("gulp-imagemin");
let nodemon = require("gulp-nodemon");
let path = require("path");
let reactDOMServer = require('react-dom/server');
let react = require('react');
let rimraf = require("rimraf");
let sass = require("gulp-sass");
let source = require("vinyl-source-stream");
let sourcemaps = require("gulp-sourcemaps");
let ts = require("gulp-typescript");
let tsify = require("tsify");
let tslint = require("gulp-tslint");
let uglify = require("gulp-uglify");
let watchify = require("watchify");

let tsProject = ts.createProject("tsconfig.json");

// Configuration for entry paths
let inDir = "./src";
let outDir = "./build";
let config = {
  client: {
    html: {
      index: inDir + "/client/html/index.html",
      src: inDir + "/client/html/*.html",
      out: outDir + "/server/public",
    },
    img: {
      src: inDir + "/client/img/**/*",
      out: outDir + "/server/public/img",
    },
    scss: {
      src: inDir + "/client/scss/*.scss",
      out: outDir + "/server/public/stylesheets",
    },
    ts: {
      reactIndex: inDir + "/client/ts/components/Main.tsx",
      src: inDir + "/client/ts/main.tsx",
      out: outDir + "/server/public/javascripts",
    },
  },

  server: {
    static: {
      src: inDir + "/server/static/**/*",
      out: outDir + "/server/public/",
    },
    ts: {
      src: inDir + "/server/ts/**/*.ts",
      out: outDir + "/server",
    }
  },

  lint: [
    inDir + "/client/ts/**/*.ts",
    inDir + "/client/ts/components/**/*.tsx",
    inDir + "/server/**/*.ts",

  ],
};

// Clean out the build directory
gulp.task("clean", function(done) {
  rimraf("./build/*", function(e) {
    if (e) gutil.log(gutil.colors.red(e.toString()));
    done();
  });
});

// Apply production
gulp.task('apply-prod-environment', function() {
  process.env.NODE_ENV = 'production';
});

// Compile client scss
gulp.task("compile-scss", function(done) {
  try {
    gulp.src(config.client.scss.src)
    .pipe(sass())
    .on("error", function(e) {
      gutil.log(gutil.colors.red(e.toString()));
      this.emit("end");
    })
    .pipe(gulp.dest(config.client.scss.out))
    .on("end", function() {
      done();
    });
  } catch (e) {
    console.log(e);
  }
});


gulp.task("watch-scss", ["compile-scss"], function() {
  return gulp.watch(config.client.scss.src, function() {
    return gulp.start("compile-scss");
  });
});

gulp.task("minify-scss", function(done) {
  gulp.src(config.client.scss.src)
    .pipe(sass())
    .pipe(cleanCSS({compatibility: "ie8"}))
    .pipe(gulp.dest(config.client.scss.out))
    .on("end", function() {
      done();
    });
});

// Compile client images
gulp.task("compile-img", function(done) {
  gulp.src(config.client.img.src)
    .pipe(gulp.dest(config.client.img.out))
    .on("end", function() {
      done();
    });
});

gulp.task("watch-img", ["compile-img"], function() {
  return gulp.watch(config.client.img.src, function() {
    return gulp.start("compile-img");
  });
});

gulp.task("minify-img", function(done) {
  gulp.src(config.client.img.src)
    .pipe(minifyImg())
    .pipe(gulp.dest(config.client.img.out))
    .on("end", function() {
      done();
    });
});

// Compile client html
gulp.task("compile-html", function(done) {

  let dir = config.client.html.out;
  let preDir = path.resolve(dir, "..");
  if (!fs.existsSync(preDir)) {
    fs.mkdirSync(preDir);
  }
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  require('ts-node/register');

  fs.readFile(config.client.html.index, "utf8", function(e, data) {
    if (e) {
      gutil.log(gutil.colors.red(e.toString()));
      done();
    } else {
      // Replace into the html
      let newFile = data;
      let Main = require(config.client.ts.reactIndex).default;
      decache(config.client.ts.reactIndex);
      let mainProps = {};
      let mainString = reactDOMServer.renderToString(react.createElement(Main, mainProps));
      newFile = newFile.replace('<%REPLACE_REACT_MAIN%>', mainString);

      fs.writeFile(config.client.html.out + "/index.html", newFile, function(e) {
        if (e) {
          gutil.log(gutil.colors.red(e.toString()));
        }
        done();
      });
    }
  });
});

gulp.task("watch-html", ["compile-html"], function() {
  return gulp.watch(config.client.html.src, function() {
    return gulp.start("compile-html");
  });
});

gulp.task("minify-html", ["compile-html"], function(done) {
  gulp.src(config.client.html.out + "/index.html")
    .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(config.client.html.out))
      .on("end", function() {
        done();
      });
});

// Compile client typescript
gulp.task("compile-client-ts", function() {
  return browserify(config.client.ts.src, {
    cache: {},
    packageCache: {},
    debug: true,
  })
  .plugin(tsify)
  .transform(babelify.configure({
    compact: false,
    presets: ["es2015", "react"]
  }))
  .bundle()
  .pipe(source("app.js"))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.client.ts.out));
});

gulp.task("watch-client-ts", function() {
  let task = ["watch-client-ts"];
  let count = 0;
  let cyan = gutil.colors.cyan;
  let magenta = gutil.colors.magenta;

  let bundle = function(bundler) {
    gutil.log(cyan(task), "Starting bundling", magenta("#" + count));
    let startTime = new Date().getTime();

    return bundler
      .bundle()
      .on("error", function(e) {
        gutil.log(gutil.colors.red(e.toString()));
        this.emit("end");
      })
      .pipe(source("app.js"))
      // .pipe(sourcemaps.init({loadMaps: true}))
      // .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.client.ts.out))
      .on("error", function(e) {
        gutil.log(gutil.colors.red(e.toString()));
        this.emit("end");
      })
      .on("end", function() {
        let time = new Date().getTime() - startTime;
        gutil.log(cyan(task), "Finished bundling", magenta("#" + count++), "after", magenta(time + "ms"));
      });
  };

  let bundler = watchify(browserify(config.client.ts.src, {
    cache: {},
    packageCache: {},
    debug: true
  })
  .plugin(tsify)
  .transform(babelify.configure({
    compact: false,
    presets: ["react", "es2015"]
  })));

  bundler.on("update", function() {
    bundle(bundler);
  });

  return bundle(bundler);
});

gulp.task("minify-client-ts", ["apply-prod-environment"], function() {
  return browserify(config.client.ts.src, {
    cache: {},
    packageCache: {},
    debug: true
  })
  .plugin(tsify)
  .transform(babelify.configure({
    compact: false,
    presets: ["es2015", "react"]
  }))
  .bundle()
  .pipe(source("app.min.js"))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.client.ts.out));
});

// Compile server typescript
gulp.task("compile-server-ts", function() {
  return gulp.src(config.server.ts.src)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.server.ts.out));
});

gulp.task("watch-server-ts", ["compile-server-ts"], function() {
  return gulp.watch(config.server.ts.src, function() {
      return gulp.start("compile-server-ts");
  });
});

gulp.task("minify-server-ts", function() {
  gulp.start("compile-server-ts");
});

gulp.task("move-server-static", function() {
  return gulp.src(config.server.static.src)
    .pipe(gulp.dest(config.server.static.out));
});

// Nodemon server
gulp.task("nodemon", function() {
  return nodemon({
    script: "build/server/bin/www",
    tasks: [],
    ext: "html js css",
    env: { NODE_ENV: "development" },
    watch: [
      "build/server/**/*",
    ],
    ignore: [
      "build/server/public",
    ],
  });
});

// Typescript linter
gulp.task("lint", function() {
  return gulp.src(config.lint)
    .pipe(tslint({
      formatter: "verbose",
    }))
    .pipe(tslint.report({
      emitError: false,
      summarizeFailureOutput: true,
    }));
});

gulp.task("compile", ["compile-scss", "compile-img", "compile-html", "compile-client-ts", "compile-server-ts", "move-server-static"]);

gulp.task("watch", ["watch-scss", "watch-img", "watch-html", "watch-client-ts", "watch-server-ts", "move-server-static"], function() {
  return gulp.start("nodemon");
});

gulp.task("minify", ["minify-scss", "minify-img", "minify-html", "minify-client-ts", "minify-server-ts"]);

gulp.task("default", ["watch"]);
