module.exports = {
  outputDir: "build/",
  runtimeCompiler: true,
  pages: {
    index: {
      entry: "src/index-dev.js",
      template: "src/index-dev.html"
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  }
};
