export default {
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:5500/',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, "")
        }
    }
    // server: {
    //     proxy: {
    //         // string shorthand
    //         '/foo': 'http://localhost:4567/foo',
    //         // with options
    //         '/api': {
    //             target: 'http://jsonplaceholder.typicode.com',
    //             changeOrigin: true,
    //             rewrite: (path) => path.replace(/^\/api/, '')
    //         }
    //     // with RegEx
    //     '^/fallback/.*': {
    //             target: 'http://jsonplaceholder.typicode.com',
    //             changeOrigin: true,
    //             rewrite: (path) => path.replace(/^\/fallback/, '')
    //         }
    //     }
    // }
}