
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');

const port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
  res.sendFile(publicPath + '/index.html');
})


app.listen(port, () => {
  console.log(`Started up on port ${port}`);
});
