import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Todoapp from './Todoapp';
import './index.css';
import {Router,Route, IndexRoute, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
        <IndexRoute component={Todoapp}/>
        <Route path="todo" component={Todoapp} />
        <Route path="about" component={About} />
  </Route>
  </Router>,

  document.getElementById('root')
);
