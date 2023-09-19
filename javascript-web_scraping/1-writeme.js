#!/usr/bin/node
/* writes a string to a file */
const fs = require('fs');

// Check if the correct number of command-line arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: node 1-writeme.js <file_path> <string_to_write>');
  process.exit(1);
}

// Get the file path and string to write from the command-line arguments
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Write the string to the file in utf-8 encoding
fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stringToWrite);
  }
});

