const express = require('express');
const app = express();
const PORT = 3000;

app.use('/', express.static(__dirname + '/public/'));
// because we use layout.html...im going to just serve that as root
app.get('/:trailId(\\d+$)*?', (req, res) => {
  res.status(200).sendFile(__dirname + '/public/layout.html');
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}...`);
});

