/*
 * grunt-c-name
 * https://github.com/wscj/c-name
 *
 * Copyright (c) 2018 ChenJing
 * Licensed under the MIT license.
 */

'use strict';

const path = require('path')
const fs = require('fs')

module.exports = function(grunt) {

  grunt.registerMultiTask('c_name', function() {

    const distDir = path.join(process.cwd(), 'dist')
    // grunt.log.writeln(distDir)
    fs.readdirSync(distDir).forEach(dir => {
      fs.readdirSync(path.join(distDir, dir)).forEach(file => {
        if (/index.html$/.test(file)) {
          const oldPath = path.join(distDir, dir, file)
          const newPath = path.join(distDir, dir, 'index.html')
          fs.renameSync(oldPath, newPath)
        }
      })
    })
  })

};
