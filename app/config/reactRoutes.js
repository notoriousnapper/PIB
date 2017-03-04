var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;



var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/homepage/Home');

var About = require('../components/aboutpage/About');
var Apply = require('../components/applypage/Apply');
var Add = require('../components/addpage/Add');

var Projects = require('../components/projectlistings/Projects');
var Content = require('../components/content/Content');
var Contact = require('../components/Contact');

var Proj = require('../components/projectpage/Proj');
var Input = require('../components/Input');

var Login = require('../components/userpage/Login');
var SignUp = require('../components/userpage/SignUp');
var Profile = require('../components/userpage/Profile');
var Footer = require('../components/custom/Footer');

var Test = require('../components/custom/Test');
/* ReactRouter Routes urls to components */
// var Home = (require'../components/Main');
var reactRoutes = (
	<div>
	<Router history={hashHistory}>
		<Route  path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='/home' component={Home}/>
			<Route path='/projects(/:id)' component={Projects}>
				<Route name="input" path="/input" component={Input}/>
			</Route>
			<Route path='/content(/:id)' component={Content}>
				<Route name="input" path="/input" component={Input}/>
			</Route>
			<Route path='/about' component={About}/>
			<Route path='/apply' component={Apply}/>
			<Route path='/addproject' component={Add}/>
			<Route path='/login' component={Login}/>
			<Route path='/signup' component={SignUp}/>
			<Route path='/profile' component={Profile}/>
			<Route path='/test' component={Test}/>
		</Route>
	</Router>


	<Footer />
	</div>
);
	    // Insert this in later
			// <Route path='/contact' component={Contact}/>


module.exports = reactRoutes;
