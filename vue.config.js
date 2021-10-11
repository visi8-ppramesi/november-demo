//vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Visi8 Presentation";
                return args;
            })
        config.module
            .rule('html')
            .test(/\.html$/)
            .use('html-loader')
            .loader('html-loader')
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