System.config({
    transpiler: 'typescript',
    baseURL: '',
    paths: {
        'typescript':               'node_modules/typescript/lib/typescript.js',
        'systemjs':                 'node_modules/systemjs/dist/system.js',
        'system-polyfills':         'node_modules/systemjs/dist/system-polyfills.js',

        'lodash':                   'node_modules/lodash/lodash.js',
    },
    map: {
        'MruGames/Utils':           'src/main/js'
    },
    packages: {
        'src/test': {
            defaultExtension: 'ts'
        },
        'MruGames/Utils': {
            defaultExtension: 'ts'
        },
        'node_modules': {
            defaultExtension: 'js'
        }
    },
    meta: {
        'MruGames/Utils/*': {
            format: 'esm'
        }
    },
    serveFiles: [
        './src/main/**/*.ts',
        './node_modules/**/*.js'
    ]
});