// eslint-disable-next-line import/no-commonjs
const path = require('path')

const config = {
  projectName: 'taro_example',
  date: '2022-12-30',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  alias: {
    '@/vant': path.resolve(__dirname, '../src/components/vant-weapp/dist')
  },
  copy: {
    patterns: [
      { from: 'src/components/vant-weapp/dist/wxs', to: 'dist/components/vant-weapp/dist/wxs' },
      { from: 'src/components/vant-weapp/dist/common/style', to: 'dist/components/vant-weapp/dist/common/style' },
      { from: 'src/components/vant-weapp/dist/common/index.wxss', to: 'dist/components/vant-weapp/dist/common/index.wxss' },
      { from: 'src/components/vant-weapp/dist/button/index.wxs', to: 'dist/components/vant-weapp/dist/button/index.wxs' },
      { from: 'src/components/vant-weapp/dist/icon/index.wxs', to: 'dist/components/vant-weapp/dist/icon/index.wxs' },
      { from: 'src/components/vant-weapp/dist/popup/index.wxs', to: 'dist/components/vant-weapp/dist/popup/index.wxs' },
      { from: 'src/components/vant-weapp/dist/transition/index.wxs', to: 'dist/components/vant-weapp/dist/transition/index.wxs' },
      { from: 'src/components/vant-weapp/dist/loading/index.wxs', to: 'dist/components/vant-weapp/dist/loading/index.wxs' },
      { from: 'src/components/vant-weapp/dist/calendar/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/index.wxs' },
      { from: 'src/components/vant-weapp/dist/calendar/utils.wxs', to: 'dist/components/vant-weapp/dist/calendar/utils.wxs' },
      { from: 'src/components/vant-weapp/dist/calendar/calendar.wxml', to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml' },
      { from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs' },
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack4',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          // ??????????????? vant???????????????px???rpx
          // selectorBlackList: [/van-/],
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // ????????????????????????
        }
      },
      cssModules: {
        enable: false, // ????????? false??????????????? css modules ?????????????????? true
        config: {
          namingPattern: 'module', // ???????????????????????? global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    esnextModules: [/@antmjs[\\/]vantui/],
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // ????????? false??????????????? css modules ?????????????????? true
        config: {
          namingPattern: 'module', // ???????????????????????? global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // ????????? false??????????????? css modules ?????????????????? true
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
