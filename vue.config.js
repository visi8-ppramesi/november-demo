//vue.config.js
module.exports = {
    devServer: {
        hot: false,
        liveReload: false,
        disableHostCheck: true,
    },
    // configureWebpack: {
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.html$/i,
    //                 loader: "html-loader",
    //                 options: {
    //                     sources: false,
    //                 },
    //             },
    //         ],
    //     },
    // },
    chainWebpack: config => {
        config.module
            .rule('html')
            .test(/\.html$/)
            .use('html-loader')
            .loader('html-loader')

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.hotReload = false
                return options
            })

        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Visi8 Presentation";
                return args;
            })
            .end()
        // const imgRule = config.module.rule('images')
        // imgRule.uses.clear()
        // imgRule
        //     .use('file-loader')
        //     .loader('file-loader')
        //     .options({
        //         limit: 10000,
        //         name: 
        //     })
    }
}