const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');
const withPlugins = require('next-compose-plugins');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {};
}

module.exports = withPlugins([
    withImages,
    [
        withCSS,
        {
            cssModules: true,
            cssLoaderOptions: {
                minimize: true,
                localIdentName: '[local]'
            }
        }
    ],
    [
        withOffline,
        {
            workboxOpts: {
                runtimeCaching: [
                    {
                        urlPattern: /^https?.*/,
                        handler: 'networkFirst'
                    },
                    {
                        urlPattern: /[.](png|svg|ico|css|woff|webmanifest)/,
                        handler: 'cacheFirst'
                    }
                ]
            }
        },
        ['!', PHASE_DEVELOPMENT_SERVER]
    ]
]);
