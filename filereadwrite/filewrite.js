var fs = require('fs');

var os = require('os');
var userInfo = os.userInfo();
console.log(userInfo);
var str = "jjjhjhfggff"
fs.writeFile('mynewfile3.txt', userInfo.username, function (err) {
  if (err) throw err;
  console.log('Saved!');
});