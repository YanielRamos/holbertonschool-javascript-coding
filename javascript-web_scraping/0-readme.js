#!/usr/bin/node
/* Read and print the content of a file */

const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, text) => {
  if (err) {
    console.log(err);
  } else {
    console.log(text.toString().trim());
  }
});
