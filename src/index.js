/**
 * Created by JTPeng on 2019-07-29 09:00.
 * Description：
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入路由组件
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App/>
  </Router>
  , document.getElementById('root'));