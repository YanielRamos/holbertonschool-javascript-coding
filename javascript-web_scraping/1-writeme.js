#!/usr/bin/node
/* writes a string to a file */
const fs = require('fs');

// contain name of the file
fs.writeFile(process.argv[2], process.argv[3], 'utf-8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(process.argv[3]);
  }
});
