// Libraries
import React from 'react'; // core React
import ReactDOM from 'react-dom'; // React used to render HTML
import {Router, Route, hashHistory} from 'react-router'; // Routing bits
import request from 'superagent'; // http library for browser
import {createStore} from 'redux'; // core Redux
import {Provider} from 'react-redux'; // React-Redux bridge


// Components
import reducer from './reducer';
import {setState} from './action_creators';
import App from './components/App';
import {Landing} from './components/Landing';
import {ResultsContainer} from './components/Results';

// Styles
require('./style.scss');

// Redux Store definition
const store = createStore(reducer); // state is now Immutable Map()
store.dispatch(setState({results: [{id: '9999', title: 'Testing'}]})); // js here converted to Immutable values

// Api data
request.get('http://jsonplaceholder.typicode.com/posts')
  .end(function(err, res){
    store.dispatch(setState({results: res.body}));
  });

// Forecast
const forecast = require('./forecast.json');
console.log(forecast);
store.dispatch(setState({
  lat: forecast.latitude,
  lon: forecast.longitude,
  currently: forecast.currently
}));


// Routes
const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer} />
  <Route path="/" component={Landing} />
</Route>;

// Render the starting point
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
