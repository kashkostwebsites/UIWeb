const fs = require('fs');

if (fs.existsSync('uifile1.ui')) {

    
}

else {
  fs.appendFile('uifile1.ui', '<!-- Write some HTML code, We style it, No doctype html. -->',   (err, other)); {
    if (err) {
      console.log('Failed adding UI file')
    }
}
}