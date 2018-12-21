const express = require('express');
const app = express();
const handleBarsExpress = require('express-handlebars');

// set moustache as template engine
// our view layout.html is technically our only template
app.engine('html', handleBarsExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

const PORT = (process.env.NODE_ENV === 'production') ? 80 : 3000;

app.use('/', express.static(__dirname + '/public/'));
// because we use layout.html...im going to just serve that as root
app.get('/:trailId(\\d+$)*?', (req, res) => {
  res.status(200).render('layout', {env_production: (process.env.NODE_ENV === 'production')});
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}...`);
});

