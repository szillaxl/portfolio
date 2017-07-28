const fs = require('fs');

fs.readFile('quote.txt', 'utf8', (err, data) => {
  if (err) throw err;
  //console.log(data);
  var fragment = data.split (" ")
//console.log(fragment);
var change = data.replace(/(B| b)\w+/g, " Brainstation");
console.log(change);


fs.writeFile('quote_edited.txt', change, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

});




//write files
