//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/TourismAngularTestProject'));

const newsApi = require('./src/routes/helper.api');

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept');
  res.header('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('/api', newsApi);

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/TourismAngularTestProject/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
