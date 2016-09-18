System.config({
    transpiler: 'typescript',
    baseURL: '',
    paths: {
        'typescript':               'node_modules/typescript/lib/typescript.js',
        'systemjs':                 'node_modules/systemjs/dist/system.js',
        'system-polyfills':         'node_modules/systemjs/dist/system-polyfills.js',
    },
    map: {
        'callback-collections':     'src/main'
    },
    packages: {
        'src/test': {
            defaultExtension: 'ts'
        },
        'callback-collections': {
            defaultExtension: 'ts', main: 'index.ts'
        },
        'node_modules': {
            defaultExtension: 'js'
        }
    },
    meta: {
        'callback-collections/*': {
            format: 'esm'
        }
    },
    serveFiles: [
        './src/main/**/*.ts',
        './node_modules/**/*.js'
    ]
});