/*const express = require('express');
const app = express();
const fs = require('fs');
let maybeThisTime;

fs.readFile('./score.JSON', 'utf8', (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  } else {
    maybeThisTime = JSON.parse(data);
    console.log(maybeThisTime.id);
  } });

app.get('/getScore/', function(req, res) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
  res.end(maybeThisTime);
});

app.post('/setScore/', function(req, res) {
    let aNewHigh = req;
    let aTryString = JSON.stringify(aNewHigh);
    fs.writeFileSync('score.JSON', aTryString);
});

app.listen(63342);

console.log('Server started.');
*/
