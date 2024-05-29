const fs = require('fs');


fs.appendFile('uifile1.ui', '<!-- Write some HTML code, We style it, No doctype html. -->',   (err)); {
if (err) {
  console.log('Failed adding UI file')
}


} 
