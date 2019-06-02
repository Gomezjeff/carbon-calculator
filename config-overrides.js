const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { // Modify theme LESS theme below
            '@primary-color': '#45A848',
            '@heading-color': '#40809C',
            '@font-family': "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
            '@slider-rail-background-color': '#d1d1d1',
            '@slider-rail-background-color-hover': '#c1c1c1',
            '@slider-track-background-color': '@primary-5',
            '@slider-track-background-color-hover': '@primary-6',
            '@slider-handle-color': '@primary-5',
            '@slider-handle-color-hover': '@primary-6'
        },
    }),
);
