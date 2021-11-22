const fs = require('fs');
console.log('Node here');

fs.readFile('./score.JSON', 'utf8', (err, data) =>{
  if (err) {
    console.log(err);
  } else {
    const hiScore = JSON.parse(data);

  }
})

