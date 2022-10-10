const path=require("path")

module.exports={
    mode:"development",
    entry:{index:"./source/index.js",about:"./source/about.js"},
    output:{
        filename:"[name]_bundle.js",
        path: path.resolve(__dirname,"public")
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}