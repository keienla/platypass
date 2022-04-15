const sass = require('sass');
const fs = require('fs');
const sassTrue = require('sass-true');

const files = [
    '_colors.scss',
    '_fluid.scss',
    '_modes.scss',
    '_reactive.scss',
    '_spacers.scss',
    '_style.scss',
    '_utils.scss',
]

function createFilePathForTest(name = '') {
    return `${__dirname}/__tests__/${name}`;
}

files.forEach(file => {
    sassTrue.runSass({ file: createFilePathForTest(file) }, { describe, it });
})