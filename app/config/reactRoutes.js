var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;



var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Projects = require('../components/Projects');
var About = require('../components/About');
var Contact = require('../components/Contact');

var Proj = require('../components/Proj');
var Input = require('../components/Input');
var Add = require('../components/Add');
var Login = require('../components/Login');
var SignUp = require('../components/SignUp');
var Profile = require('../components/Profile');


/* ReactRouter Routes urls to components */
// var Home = (require'../components/Main');
var reactRoutes = (
	<Router history={hashHistory}>
		<Route  path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='/home' component={Home}/>
			<Route path='/projects(/:id)' component={Projects}>
				<Route name="input" path="/input" component={Input}/>
			</Route>
			<Route path='/about' component={About}/>
			<Route path='/addproject' component={Add}/>
			<Route path='/login' component={Login}/>
			<Route path='/signup' component={SignUp}/>
			<Route path='/profile' component={Profile}/>
		</Route>
	</Router>
);
	    // Insert this in later
			// <Route path='/contact' component={Contact}/>


module.exports = reactRoutes;
