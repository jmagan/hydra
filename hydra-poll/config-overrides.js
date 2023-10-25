const webpack = require('webpack');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.experiments = {
        ...config.experiments,
        asyncWebAssembly: true,
        layers: true,
    };
    config.resolve = {
        ...config.resolve,
        fallback: {
            buffer: require.resolve("buffer"),
            stream: require.resolve("stream"),
        },
    }
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        })
    ]
    return config;
}