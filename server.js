/**
 * Created by IrshaadTechnologies on 4/16/2017.
 * babel-core@6.5.1 babel-loader@6.2.2 babel-preset-es2015@6.5.0 babel-preset-react@6.5.0 babel-preset-stage-0@6.24.1 css-loader@0.23.1 expect@1.14.0 foundation-sites@6.2.0 jquery@2.2.1 karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 node-sass@3.4.2 react-addons-test-utils@0.14.7 sass-loader@3.1.2 script-loader@0.6.1 style-loader@0.13.0 webpack@1.12.13
 */
var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
   if (req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://' + req.hostname + req.url);
   }else{
      next();
   }
});

app.use(express.static('public'));

app.listen(PORT, function () {
   console.log('Express Server is running on port ' + PORT);
});

