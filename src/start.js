const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/army-time-converter')); // myApp will be the same folder name.
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/army-time-converter/index.html'));
});
app.listen(process.env.PORT || 3000);