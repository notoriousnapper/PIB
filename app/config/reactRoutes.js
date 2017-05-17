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

var Test = require('../components/projectpage/Test');
var AdminMain = require('../components/adminpage/AdminMain');
var AdminDetail = require('../components/adminpage/AdminProjectDetails');
/* ReactRouter Routes urls to components */
// var Home = (require'../components/Main');
let S = {
    footerStyle: {
        marginTop: "200px"
	},
	bodyStyle: {
        marginBottom: "300px"
	}
};

var reactRoutes = (
	<div>
		<div className="container-fluid" style={S.bodyStyle}>
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
					<Route path='/admin/project/:id' component={AdminDetail}/>
					<Route path='/admin' component={AdminMain}/>
				</Route>
			</Router>
		</div>
		<div style={S.footerStyle}>
			<Footer />
		</div>
	</div>
);
	    // Insert this in later
			// <Route path='/contact' component={Contact}/>


module.exports = reactRoutes;
