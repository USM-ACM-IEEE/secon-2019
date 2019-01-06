// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Bootstrap Stuff
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import AuthRedirector from './components';

// Do the routing and then render
ReactDOM.render(
  <AuthRedirector />
  ,
  document.getElementById('root'),
);
