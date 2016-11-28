/* Crazy Flavors */

/* NodeJS way */

var fs = require('fs');
var React = require('react');
var ReactDOM = require('react-dom');
var reactRoutes = require('./config/reactRoutes');

ReactDOM.render(
    reactRoutes,
    document.getElementById('app')
  )
