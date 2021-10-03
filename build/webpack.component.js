const {VueLoaderPlugin} = require('vue-loader')
const glob = require('glob');
const utlis =require('./utlis')
const list = {}
// {
//   card: './components/lib/card/index.js'
//   demo:'./components/lib/demo/index.js'
// }
async function makeList (dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  //[ 'components/lib/card/index.js', 'components/lib/demo/index.js' ]
  console.log('files', files);
  for (let file of files) {
    //component card  component demo
    const component = file.split(/[/.]/)[2];
    console.log('component', component);
    list[component] = `./${file}`;
  }
  console.log(list);
}
makeList('components/lib',list)

module.exports = {
  entry: list,//入口文件
  mode:'production',//生产模式
  output: {
    filename: '[name].umd.js',
    path: utlis.DIST_PATH,
    library: 'lview',
    libraryTarget:'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader:'vue-loader'
          }
        ]
      }
    ]
  }
}