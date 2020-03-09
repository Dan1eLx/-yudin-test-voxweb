"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.25rem", // gutter width - 20px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "0.625rem" // side fields - 10px
        },
        breakPoints: {
            xs: {
                width: "21.25rem"
            },
            sm: {
                width: "30.45rem"
            },
            md: {
                width: "39.6rem"
            },
            lg: {
                width: "50rem"
            }
        }
    });
    cb();
});
