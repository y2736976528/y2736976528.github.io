// export default {
//     entry: './src/home/index.js',
//     output: {
//         filename: 'home/index.js',
//         path: './docs'
//     }
// }

export default {
    entry: {
        home: './src/home/home.js',
        index: './src/index/index.js',
        hello: 'hello world!'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: '/docs'
    }
}
//作业二：
// 将./src/home/home.js中的代码打包到/docs/home/文件夹中，
//文件名称叫home.jfkasldfjklas.js


// 将./src/index/index.js中的代码打包到/docs/index/文件夹中，
//文件名称叫index.asdjfklasdfas.js