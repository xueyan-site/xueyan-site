module.exports = {
  type: 'react-csr',
  index: 'index',
  error: 'error',
  alias: {
    api: 'pub/api',
    ast: 'pub/ast',
    com: 'pub/com',
    utl: 'pub/utl',
  },
  serve: {
    port: 12000
  },
  module: {
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'classnames': 'classNames',
      'lodash': '_'
    }
  },
  page: {
    metas: [
      {
        key: 'ie',
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      },
      {
        key: 'viewport',
        name: 'viewport',
        content: 'viewport-fit=cover,width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
      }
    ],
    links: [
      {
        key: 'favicon',
        rel: "icon",
        type: "image/png",
        href: "{{P_ASSETS_PATH}}favicon.png"
      }
    ],
    styles: [
      {
        key: 'normalize',
        rel: 'stylesheet',
        href: "{{P_ASSETS_PATH}}normalize.css"
      },
      {
        key: 'global',
        rel: 'stylesheet',
        href: '{{P_ASSETS_PATH}}global.css'
      }
    ],
    scripts: [
      {
        key: 'react',
        defer: true,
        src: "{{P_ASSETS_PATH}}react.js"
      },
      {
        key: 'react-dom',
        defer: true,
        src: "{{P_ASSETS_PATH}}react-dom.js"
      },
      {
        key: 'classnames',
        defer: true,
        src: "{{P_ASSETS_PATH}}classnames.js"
      },
      {
        key: 'lodash',
        defer: true,
        src: "{{P_ASSETS_PATH}}lodash.js"
      }
    ]
  }
}