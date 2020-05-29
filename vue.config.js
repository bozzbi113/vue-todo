module.exports = {
  outputDir: "build/",
  runtimeCompiler: true,
  pages: {
    index: {
      entry: process.env.INDEX_ENTRY,
      template: process.env.INDEX_TEMPLATE
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  }
};
