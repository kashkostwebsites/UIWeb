const fs = require('fs');
const https = require('https');

if (fs.existsSync('uifile1.ui')) {
 fs.readFile('uifile1.ui', (err, data) => {
  if(err) {
    console.log('Error!, now closing...')
    process.abort();
  }

  else {
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<!DOCTYPE html>\n<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>/n' + data);
      res.end();
      }).listen(8080);
  }
})
    
}

else {
  fs.appendFile('uifile1.ui', '<!-- Write some HTML code, We style it, No doctype html. -->', (err) => { 
 if(err) {
 console.log('Failed to create UI file, now closing...');
 process.abort();
 }

 else {
  console.log('Created file!, edit the file and redeploy for the server to start!')
 }
})
}
