const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/LCS-inventory-frontend')); // myApp will be the same folder name.
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/LCS-inventory-frontend/index.html'));
});
app.listen(process.env.PORT || 3000);
