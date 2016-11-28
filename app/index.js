/* Crazy Flavors */

/* NodeJS way */
var React = require('react');
var ReactDOM = require('react-dom');
// var Router = require('react-router'); // Linking dependencies
var routes = require('./config/routes');
/* Other Way */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


/* Node JS way is better because....  --- List reasons */




//Why doesn't browserHistory work?
  // <Router history={browserHistory}>

/*
ReactDOM.render(
  <Router> 
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route className="name" path="sth" component="{sth}"/>
    <Route className="name" path="sth" component="{sth}"/>

    <Route className="name" path="sth" component="{sth}"/>
    </Route>
  </Router>
    , 
    document.getElementById('root')
);
*/

ReactDOM.render(
    routes,
    document.getElementById('app')
  )








