const { sentenceCase } = require('change-case');
const { readdir } = require('node:fs/promises');
const { statSync } = require('node:fs');
const { basename } = require('node:path');
const glob = require('glob');

module.exports = async function () {
  const result = await readdir('./presentation');
  return result.map((file) => {
    const name = basename(file, '.js');

    return {
        file,
        jsPath: `./index.js`,
        url: `/presentation/${name}/index.html`,
        name,
        title: sentenceCase(name),
    }
  });
};
