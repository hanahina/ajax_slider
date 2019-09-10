const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        index: "./index.js"
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist")
    }
};
